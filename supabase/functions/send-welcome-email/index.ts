import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { email } = await req.json();

    if (!email) {
      return new Response(
        JSON.stringify({ error: "Email is required" }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
              background: #000000;
              color: #ffffff;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 40px 20px;
            }
            .logo {
              width: 60px;
              height: 60px;
              background: linear-gradient(135deg, #00C853 0%, #00E676 100%);
              border-radius: 16px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 32px;
              font-weight: bold;
              color: white;
              margin-bottom: 32px;
            }
            .header {
              font-size: 32px;
              font-weight: bold;
              margin-bottom: 16px;
              background: linear-gradient(135deg, #00C853 0%, #00E676 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            }
            .content {
              font-size: 16px;
              line-height: 1.6;
              color: rgba(255, 255, 255, 0.7);
              margin-bottom: 32px;
            }
            .highlight {
              color: #00C853;
              font-weight: 600;
            }
            .footer {
              margin-top: 48px;
              padding-top: 24px;
              border-top: 1px solid rgba(255, 255, 255, 0.1);
              font-size: 14px;
              color: rgba(255, 255, 255, 0.4);
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="logo">K</div>
            
            <div class="header">Welcome to the Future of Saving!</div>
            
            <div class="content">
              <p>Thank you for joining the <span class="highlight">Klip waitlist</span>! 🎉</p>
              
              <p>You're now part of an exclusive community of <strong>10,000+ early savers</strong> who are ready to revolutionize the way they save money.</p>
              
              <p><strong>What happens next?</strong></p>
              <ul>
                <li>You'll be among the first to get early access when we launch</li>
                <li>Exclusive founding member benefits and rewards</li>
                <li>Behind-the-scenes updates on our progress</li>
                <li>Priority support from our team</li>
              </ul>
              
              <p>We're working hard to bring you the world's most intuitive automatic savings experience. Every spend, every Klip, every save.</p>
              
              <p style="margin-top: 32px;">Stay tuned for updates!</p>
              
              <p style="margin-top: 24px; color: #00C853; font-weight: 600;">The Klip Team</p>
            </div>
            
            <div class="footer">
              <p>© 2025 Klip. All rights reserved.</p>
              <p style="margin-top: 8px;">You're receiving this email because you joined our waitlist.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Klip <onboarding@resend.dev>",
        to: [email],
        subject: "Welcome to Klip - You're on the Waitlist! 🚀",
        html: emailHtml,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error("Resend API error:", error);
      throw new Error(`Failed to send email: ${error}`);
    }

    const data = await res.json();

    return new Response(
      JSON.stringify({ success: true, data }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});