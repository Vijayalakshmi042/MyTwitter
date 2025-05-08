export async function GET(){
    const userCredentials=[
        {"id":1,
         "Email":"Lissamue@gmail.com",
         "Password":"a1b2c3"
        },
        {"id":2,
        "Email":"Hosamue@yahoo.com",
        "Password":"a2b3c4"
        },
        {"id":3,
        "Email":"Lissa123@gmail.com",
        "Password":"A1B2C3",
        },
         {"id":4,
         "Email":"Hosam123@gmail.com",
         "Password":"A2B3C4",
         },
        ]
        return new Response(JSON.stringify(userCredentials), { status: 200 });
}
        
