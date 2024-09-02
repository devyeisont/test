"use client";
import VideoComponent from "./components/Video";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <VideoComponent video="https://player.vdocipher.com/v2/?otp=20160313versUSE323z8jQEWkLujdc6dXDlOVay5bcYFpxLSmoc21ZSxeoPRzBlV&playbackInfo=eyJ2aWRlb0lkIjoiZjUzMTI2ZGJiNDFjNDFhYjg2OWFiODIzNTJjYmJlMzcifQ==" /> */}
      <iframe
        src="https://player.vdocipher.com/v2/?otp=20160313versUSE323q0Oj176j5zUd8ajPQPkjqvWiSJ4Saexlfibly1joPc6bi2&playbackInfo=eyJ2aWRlb0lkIjoiZjUzMTI2ZGJiNDFjNDFhYjg2OWFiODIzNTJjYmJlMzcifQ=="
     /*    style="border:0;height:360px;width:640px;max-width:100%"
        allowFullScreen="true" */
        style={{
          height: "360px",
          width: "640px",
          maxWidth: "100%",
        }}
        allow="encrypted-media"
      ></iframe>
    </main>
  );
}
