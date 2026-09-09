"use client";

import Image from "next/image";
import { useState } from "react";

export function ProfileImage() {
  const [imageUnavailable, setImageUnavailable] = useState(false);

  return (
    <div className="profile-placeholder">
      <div className="profile-placeholder-inner">
        {imageUnavailable ? (
          <span aria-hidden="true">DA</span>
        ) : (
          <Image
            src="/images/profile-about-square.jpg"
            alt="Foto profil Muhammad Daffa' Ayyasy"
            width={1100}
            height={1100}
            sizes="(max-width: 680px) 72vw, 280px"
            onError={() => setImageUnavailable(true)}
          />
        )}
      </div>
      <p>{imageUnavailable ? "Profile image unavailable" : "Muhammad Daffa' Ayyasy"}</p>
    </div>
  );
}
