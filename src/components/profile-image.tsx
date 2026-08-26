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
            src="/images/profile.jpg"
            alt="Foto profil Daffa Ayyasy"
            fill
            sizes="(max-width: 680px) 72vw, 280px"
            onError={() => setImageUnavailable(true)}
          />
        )}
      </div>
      <p>{imageUnavailable ? "Tambahkan public/images/profile.jpg" : "Muhammad Daffa'Ayyasy"}</p>
    </div>
  );
}
