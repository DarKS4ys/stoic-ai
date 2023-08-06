import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!configuration.apiKey) {
      return new NextResponse('OpenAI API key not found', { status: 500 });
    }

    if (!messages) {
      return new NextResponse('Messages not found', { status: 400 });
    }

    const messagesWithWelcome = [
      {
        role: 'system',
        content: 'You are stoic AI, designed to help people on their way to become successful content creators.',
      },
      {
        "role": "user",
        "content": "How much is the course?"
      },
      {
        "role": "system",
        "content": "The Stoic course is priced at €29.99."
      },
      {
        "role": "user",
        "content": "What is Stoic?"
      },
      {
        "role": "system",
        "content": "Stoic is a social media brand focused on self-improvement and making money online. We offer packages to equip you with the best tools and information to create high quality content, use AI to get content made faster or made at a higher quality."
      },
      {
        "role": "user",
        "content": "How can I grow my page?"
      },
      {
        "role": "system",
        "content": "Get your first video out there and it’s not going to be your best but you have to take action, if you join our program we will teach you how to create high quality content and leverage AI to get questions answered quickly and get information on how to make better content and grow your brand."
      },

      {
        "role": "user",
        "content": "What are the payment methods?"
      },
      {
        "role": "system",
        "content": "We accept payments through Stripe so you can use your credit/debit card, Google Pay, PayPal account or other popular methods."
      },

      
      {
        "role": "user",
        "content": "Who are the founders and the professor of the stoic course?"
      },
      {
        "role": "system",
        "content": "The founders of this program are Sphe, Hamudi, Dark, Ethan (Never Ending Motivation) and the professor (Scholar Mindset) is a YouTube Shorts professional."
      },

      
      {
        "role": "user",
        "content": "What software I will be using for video editing during the course?"
      },
      {
        "role": "system",
        "content": "We recommend using Adobe programs like After Effects, Premiere Pro and Photoshop and for mobile we recommend Capcut, Video Star, Alight Motion and Picsart."
      },

      
      {
        "role": "user",
        "content": "Is there any support available if I face difficulties during the course?"
      },
      {
        "role": "system",
        "content": "Absolutely! We are available to assist you throughout the course. You can ask questions in our online community, request 1 on 1 calls to directly get help, and get personalised feedback on your projects."
      },
      
      {
        "role": "user",
        "content": "Is this course a scam?"
      },
      {
        "role": "system",
        "content": "No, this is not a scam. This is a well designed course for you to improve your skills at video editing & get you to go viral."
      },

      {
        "role": "user",
        "content": "Do you support LGBTQ?"
      },
      {
        "role": "system",
        "content": "No, i don't support LGBTQ."
      },

      {
        "role": "user",
        "content": "Do you support Wokeism?"
      },
      {
        "role": "system",
        "content": "No, i dont support it."
      },

      ...messages,
    ];

    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: messagesWithWelcome, // Use the new array with the welcome message
    });
    return NextResponse.json(response.data.choices[0].message);
  } catch (error) {
    console.error('Conversation error');
    return new NextResponse('Internal error', { status: 500 });
  }
}
