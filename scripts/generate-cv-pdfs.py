import json
from html import escape
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    HRFlowable,
    KeepTogether,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
DATA_PATH = ROOT / "src" / "content" / "portfolio-content.json"
OUTPUT_DIR = ROOT / "public" / "cv"


def text(value: str) -> str:
    return escape(value).replace("\n", "<br/>")


def make_styles():
    styles = getSampleStyleSheet()
    return {
        "name": ParagraphStyle(
            "CVName", parent=styles["Normal"], fontName="Helvetica-Bold",
            fontSize=22, leading=24, alignment=TA_CENTER, textColor=colors.HexColor("#111111"),
            spaceAfter=3,
        ),
        "headline": ParagraphStyle(
            "CVHeadline", parent=styles["Normal"], fontName="Helvetica",
            fontSize=9.4, leading=12, alignment=TA_CENTER, textColor=colors.HexColor("#444444"),
            spaceAfter=4,
        ),
        "contact": ParagraphStyle(
            "CVContact", parent=styles["Normal"], fontName="Helvetica",
            fontSize=8.2, leading=11, alignment=TA_CENTER, textColor=colors.HexColor("#333333"),
            spaceAfter=10,
        ),
        "section": ParagraphStyle(
            "CVSection", parent=styles["Normal"], fontName="Helvetica-Bold",
            fontSize=8.7, leading=11, textColor=colors.HexColor("#111111"),
            spaceBefore=10, spaceAfter=4,
        ),
        "body": ParagraphStyle(
            "CVBody", parent=styles["Normal"], fontName="Helvetica",
            fontSize=8.45, leading=11.4, textColor=colors.HexColor("#202020"),
            spaceAfter=4,
        ),
        "skill": ParagraphStyle(
            "CVSkill", parent=styles["Normal"], fontName="Helvetica",
            fontSize=8.35, leading=11, textColor=colors.HexColor("#202020"),
            spaceAfter=2,
        ),
        "entry-title": ParagraphStyle(
            "CVEntryTitle", parent=styles["Normal"], fontName="Helvetica-Bold",
            fontSize=9, leading=11.5, textColor=colors.HexColor("#111111"),
        ),
        "entry-meta": ParagraphStyle(
            "CVEntryMeta", parent=styles["Normal"], fontName="Helvetica",
            fontSize=8.2, leading=10.5, textColor=colors.HexColor("#444444"),
        ),
        "date": ParagraphStyle(
            "CVDate", parent=styles["Normal"], fontName="Helvetica",
            fontSize=8.2, leading=10.5, alignment=TA_RIGHT, textColor=colors.HexColor("#444444"),
        ),
        "bullet": ParagraphStyle(
            "CVBullet", parent=styles["Normal"], fontName="Helvetica",
            fontSize=8.25, leading=11.2, leftIndent=10, firstLineIndent=-7,
            textColor=colors.HexColor("#202020"), spaceAfter=2.5,
        ),
        "cert": ParagraphStyle(
            "CVCert", parent=styles["Normal"], fontName="Helvetica",
            fontSize=8.4, leading=11.2, leftIndent=10, firstLineIndent=-7,
            textColor=colors.HexColor("#202020"), spaceAfter=3,
        ),
        "footer": ParagraphStyle(
            "CVFooter", parent=styles["Normal"], fontName="Helvetica",
            fontSize=7.5, leading=9, alignment=TA_CENTER, textColor=colors.HexColor("#777777"),
        ),
    }


def section_heading(title: str, styles):
    return [
        Paragraph(title.upper(), styles["section"]),
        HRFlowable(width="100%", thickness=0.55, color=colors.HexColor("#222222"), spaceAfter=6),
    ]


def entry_header(title: str, organization: str, location: str, period: str, styles):
    left = [
        Paragraph(text(title), styles["entry-title"]),
        Paragraph(text(organization + (f" · {location}" if location else "")), styles["entry-meta"]),
    ]
    table = Table([[left, Paragraph(text(period), styles["date"])]], colWidths=[142 * mm, 32 * mm])
    table.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ]))
    return table


def bullet_list(items, styles):
    return [Paragraph(f"• {text(item)}", styles["bullet"]) for item in items]


def build_story(locale_data, locale, styles):
    profile = locale_data["profile"]
    shared = json.loads(DATA_PATH.read_text(encoding="utf-8"))["shared"]
    links = " · ".join(
        f'{link["label"]}: {link["href"].replace("https://", "")}'
        for link in shared["socialLinks"]
        if link["label"] != "Instagram"
    )
    story = [
        Paragraph(text(profile["name"]), styles["name"]),
        Paragraph(text(profile["headline"]), styles["headline"]),
        Paragraph(
            f'{text(profile["location"])} · {text(profile["phone"])} · '
            f'<link href="mailto:{profile["email"]}">{text(profile["email"])}</link><br/>{text(links)}',
            styles["contact"],
        ),
    ]

    summary_title = "Summary" if locale == "en" else "Ringkasan"
    skills_title = "Technical Skills" if locale == "en" else "Keahlian Teknis"
    experience_title = "Work Experience" if locale == "en" else "Pengalaman Kerja"
    projects_title = "Selected Projects" if locale == "en" else "Proyek Pilihan"
    education_title = "Education" if locale == "en" else "Pendidikan"
    training_title = "Professional Training" if locale == "en" else "Pelatihan Profesional"
    certification_title = "Certifications" if locale == "en" else "Sertifikasi"

    story += section_heading(summary_title, styles)
    story.append(Paragraph(text(profile["summary"]), styles["body"]))

    story += section_heading(skills_title, styles)
    for group in locale_data["skills"]:
        story.append(Paragraph(f'<b>{text(group["title"])}:</b> {text(", ".join(group["items"]))}', styles["skill"]))

    story += section_heading(experience_title, styles)
    for item in locale_data["experience"]:
        story.append(KeepTogether([
            entry_header(item["role"], item["company"], item["location"], item["period"], styles),
            Spacer(1, 3),
            Paragraph(text(item["description"]), styles["body"]),
            *bullet_list(item["details"], styles),
            Spacer(1, 5),
        ]))

    story += section_heading(projects_title, styles)
    for item in locale_data["projects"]:
        story.append(KeepTogether([
            entry_header(item["title"], item["type"], ", ".join(item["stack"]), "", styles),
            Spacer(1, 3),
            Paragraph(text(item["description"]), styles["body"]),
            Spacer(1, 4),
        ]))

    education_heading = section_heading(education_title, styles)
    for index, item in enumerate(locale_data["education"]):
        block = [
            entry_header(item["title"], item["place"], item["location"], item["period"], styles),
            Spacer(1, 3),
            Paragraph(text(item["description"]), styles["body"]),
            *bullet_list(item["details"], styles),
            Spacer(1, 5),
        ]
        story.append(KeepTogether(education_heading + block) if index == 0 else KeepTogether(block))

    training_heading = section_heading(training_title, styles)
    for index, item in enumerate(locale_data["training"]):
        block = [
            entry_header(item["title"], item["place"], item["location"], item["period"], styles),
            Spacer(1, 3),
            Paragraph(text(item["description"]), styles["body"]),
            *bullet_list(item["details"], styles),
            Spacer(1, 5),
        ]
        story.append(KeepTogether(training_heading + block) if index == 0 else KeepTogether(block))

    story += section_heading(certification_title, styles)
    for item in locale_data["certifications"]:
        story.append(Paragraph(f'• <b>{text(item["title"])}</b> · {text(item["issuer"])}', styles["cert"]))
    return story


def add_footer(canvas, document):
    canvas.saveState()
    canvas.setStrokeColor(colors.HexColor("#DDDDDD"))
    canvas.setLineWidth(0.4)
    canvas.line(18 * mm, 13 * mm, 192 * mm, 13 * mm)
    canvas.setFont("Helvetica", 7.5)
    canvas.setFillColor(colors.HexColor("#777777"))
    canvas.drawCentredString(105 * mm, 8.5 * mm, f"Muhammad Daffa' Ayyasy · Page {document.page}")
    canvas.restoreState()


def generate(locale, filename, data):
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    styles = make_styles()
    document = SimpleDocTemplate(
        str(OUTPUT_DIR / filename), pagesize=A4,
        leftMargin=18 * mm, rightMargin=18 * mm,
        topMargin=15 * mm, bottomMargin=18 * mm,
        title=f"Muhammad Daffa' Ayyasy — CV ({locale.upper()})",
        author="Muhammad Daffa' Ayyasy",
    )
    document.build(build_story(data, locale, styles), onFirstPage=add_footer, onLaterPages=add_footer)


if __name__ == "__main__":
    content = json.loads(DATA_PATH.read_text(encoding="utf-8"))
    generate("en", "daffa-ayyasy-cv-en.pdf", content["en"])
    generate("id", "daffa-ayyasy-cv-id.pdf", content["id"])
    # Keep the original public path working for existing bookmarks and deployments.
    generate("en", "daffa-ayyasy-cv.pdf", content["en"])
