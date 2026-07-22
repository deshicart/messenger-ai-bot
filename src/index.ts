export default {
  async fetch(request: Request): Promise<Response> {
    return new Response("Messenger AI Bot is running!", {
      status: 200,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  },
};
