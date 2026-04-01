/**
 * POST /api/subscribe
 * Body: { email: "user@example.com" }
 * Env:  BREVO_API_KEY, BREVO_LIST_ID
 */
export async function onRequestPost({ request, env }) {
  try {
    const { email } = await request.json();
    if (!email || !email.includes('@')) {
      return new Response(JSON.stringify({ error: 'Invalid email' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const res = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        email: email.trim().toLowerCase(),
        listIds: [parseInt(env.BREVO_LIST_ID)],
        updateEnabled: true,
      }),
    });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
