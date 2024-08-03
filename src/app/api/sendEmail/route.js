import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_NEW_API);

export async function POST(request) {
    try {

        const data = await request.json();
        const { nombre, correo, numero, servicio, mensaje } = data;
        const htmlContent = `
            <div style="background-color: #000000; padding: 10px;">
                <div style="background-color: #000000; color: #ffffff; padding: 20px; margin: 0 auto; max-width: 600px; border-radius: 5px;">
    <!-- Header -->
    <div style="background-color: #000000; padding: 20px; text-align: center;">

            <h1 height="50" style="display: text:white; block; margin: 0 auto;">
            NyAsociados
                <h1>
    </div>
    
    <!-- Content -->
    <div style="background-color: #000000; padding: 20px;">
        <div style="text-align: center; margin-bottom: 20px;">
            <a href="#" target="_blank">
                <img src="https://tlr.stripocdn.email/content/guids/CABINET_2c08af9e46abd212569925b240debe0c/images/44391625818311503.png" alt="Main Image" style="width: 100%; max-width: 560px; display: block; margin: 0 auto;">
            </a>
        </div>
        
        <div style="display: flex; align-items: center; margin-bottom: 20px;">
            <div style="flex: 0 0 85px; text-align: center; margin-right: 20px;">
                <a href="https://viewstripo.email" target="_blank">
                    <img src="https://tlr.stripocdn.email/content/guids/CABINET_b48f3ccc16d0ef82fadabb1efe452cdc/images/jakenackosif9tk5uykiunsplash_1.png" alt="Madeline Greene" title="Madeline Greene" style="display: block; width: 85px;">
                </a>
            </div>
            <div style="flex: 1;">
                <h1 style="color: #03aa6f; font-size: 72px; margin: 0;"><b>Hi&nbsp;</b>Arnold!</h1>
            </div>
        </div>

        <div style="margin-bottom: 20px;">
            <p style="font-size: 16px; line-height: 1.5;">
                First off, congratulations! We are so glad to have you as part of our growing community. There are close to 2 million marketers, designers, product managers, and engineers using us every day to ideate, design think, and collaborate to build some of the world’s most well-loved products. We can’t wait to see what you build!
            </p>
            <p style="font-size: 16px; line-height: 1.5;">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p style="font-size: 16px; line-height: 1.5;">
                As the CEO, my goal is to help you be successful, and to start I wanted to offer some tips to help you get the most out of us.
            </p>
        </div>

        <div style="margin-bottom: 20px;">
            <h2 style="margin: 0;">With best regards!</h2>
            <h2 style="margin: 0;">Madeline Greene and the Eona team.</h2>
        </div>

        <div style="text-align: center; margin-bottom: 20px;">
            <a href="#" target="_blank">
                <img src="https://tlr.stripocdn.email/content/guids/CABINET_2c08af9e46abd212569925b240debe0c/images/44391625818311503.png" alt="Footer Image" style="width: 100%; max-width: 560px; display: block; margin: 0 auto;">
            </a>
        </div>

        <div style="text-align: left; margin-bottom: 20px;">
            <h3 style="margin: 0;">Tell your friends</h3>
        </div>

        <div style="text-align: center; margin-bottom: 20px;">
            <a href="https://viewstripo.email" target="_blank" style="margin-right: 10px;">
                <img src="https://tlr.stripocdn.email/content/assets/img/social-icons/circle-white/facebook-circle-white.png" alt="Facebook" width="24" height="24">
            </a>
            <a href="https://viewstripo.email" target="_blank" style="margin-right: 10px;">
                <img src="https://tlr.stripocdn.email/content/assets/img/social-icons/circle-white/twitter-circle-white.png" alt="Twitter" width="24" height="24">
            </a>
            <a href="https://viewstripo.email" target="_blank" style="margin-right: 10px;">
                <img src="https://tlr.stripocdn.email/content/assets/img/social-icons/circle-white/instagram-circle-white.png" alt="Instagram" width="24" height="24">
            </a>
            <a href="https://viewstripo.email" target="_blank">
                <img src="https://tlr.stripocdn.email/content/assets/img/social-icons/circle-white/youtube-circle-white.png" alt="Youtube" width="24" height="24">
            </a>
        </div>
    </div>

    <!-- Footer -->
    <div style="background-color: #000000; padding: 20px; text-align: center;">
        <p style="font-size: 12px; color: #ffffff;">
            You are receiving this email because you have visited our site or asked us about the regular newsletter. Make sure our messages get to your Inbox (and not your bulk or junk folders).
            <br>
            <a href="https://viewstripo.email" target="_blank" style="color: #ffffff; text-decoration: underline;">Privacy policy</a> | <a href="#" target="_blank" style="color: #ffffff; text-decoration: underline;">Unsubscribe</a>
        </p>
    </div>
</div>

            </div>
            `;

        /* Resend */
        const response = await resend.emails.send({
            from: 'NyAsociados <nyasociados@nyasociados.com>',
            to: ['nyasociados@nyasociados.com'],
            cc: [correo],
            html: htmlContent,
            subject: 'Solicitud Cliente',
            text: htmlContent,
            headers: {
                'X-Entity-Ref-ID': '123456789',
            },
            tags: [
                {
                    name: 'category',
                    value: 'confirm_email',
                },
            ],
        });

        return new Response(JSON.stringify({ data }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        console.error('Error procesando la solicitud:', error);
        return new Response(JSON.stringify({ message: 'Error procesando la solicitud' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}