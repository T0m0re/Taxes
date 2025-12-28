// lib/getYoutubeMeta.ts
export async function getYoutubeMeta(videoId: string) {
  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${process.env.YOUTUBE_API_KEY}`,
      { next: { revalidate: 86400 } }
    );

    if (!res.ok) {
      throw new Error(`YouTube API error: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();

    if (!data.items || !data.items[0]) {
      throw new Error(`No video found with ID: ${videoId}`);
    }
    return data.items[0].snippet;
  } catch (error) {
    console.error("Error fetching YouTube metadata:", error);
    throw error;
  }
}
