let push = require('web-push');
let vapidKeys = {
    publicKey: 'BJn8cn3ksyuIrIwEJl4IbwTjBhEJ7oziyBRPB_uLfrZhTV3W6HNO4kKg7N43AR7QApMlTUeNMR-mdihKO46Q-fI',
    privateKey: 'UR8N4oHsL3LhVfS5ndonPUWlXrHdCVViaNNyhp2yiHA'
}
console.log(push.generateVAPIDKeys());
push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {
    endpoint:"https://fcm.googleapis.com/fcm/send/cGQKofM8if0:APA91bFSmGsr6Z1mMvp8DcGiJHM3fR6qJugVTM37wgGdh5kHvDVTT2PqleDg9M01LmQCajgWsXLpU5Qdb687AYlXW8TLj2c-1ANejmoC2uC0XbMehg7MBO_cdpj-GrSywqteHRnncgf5",
    expirationTime:null,
    keys:{
        p256dh:
            "BJJH7B0amghFHSDhZ_ulNdwJMCFx5VK3AQrBj7i3iV99ZUzVt3DfEDTlmLLyNAtvmlPg1wGqmB0GLdGnr1bISuo",
        auth:"9od3r1tXQD9z8WJO_YC0kw"
    }
};
push.sendNotification(sub, 'test message')