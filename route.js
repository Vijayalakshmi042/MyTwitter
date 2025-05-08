export async function GET(){
    const tweets=[
        {"id":1,
         "user":"Lissamue",
         "content":"Excited to be here! Looking forward to sharing my thoughts with everyone."
        },
        {"id":2,
        "user":"Hosamue",
        "content":"What a beautiful day!Enjoy your weekend,everyone!"
        },
        {"id":3,
        "user":"Lissamue",
        "content":"Starting my day with a cup of coffee. How about you?",
        },
         {"id":4,
         "user":"Lissamue",
         "content":"Diving into a new book today. Can't wait to read.",
         },
        ]
        return new Response(JSON.stringify(tweets), { status: 200 });
}
        
