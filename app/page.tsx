"use client";
import VideoComponent from "./components/Video";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <VideoComponent video="https://player.vdocipher.com/v2/?otp=20160313versUSE323z8jQEWkLujdc6dXDlOVay5bcYFpxLSmoc21ZSxeoPRzBlV&playbackInfo=eyJ2aWRlb0lkIjoiZjUzMTI2ZGJiNDFjNDFhYjg2OWFiODIzNTJjYmJlMzcifQ==" />
    </main>
  );
}
