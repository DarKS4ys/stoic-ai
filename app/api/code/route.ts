import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const instructionMessage: ChatCompletionRequestMessage = {
  role: 'system',
  content: 'You are a code generator named Stoic AI. You must answer coding questions in markdown code snippets. Use code comments for explanations that can help the user understand the code you provide.'
}

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

    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [instructionMessage, ...messages]
    });
    return NextResponse.json(response.data.choices[0].message);
  } catch (error) {
    console.error('Code error');
    return new NextResponse('Internal error', { status: 500 });
  }
}
