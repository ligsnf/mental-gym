import { auth } from '@/app/auth';
import { createTask } from '@/db/queries/tasks';

export async function GET(request: Request) {
  const session = await auth();
  const body = request.body;
  const username = session?.user?.email;
  console.log(session);

  return Response.json({
    username,
    body,
  });
}

export async function POST(request: Request) {
  const session = await auth();
  if (!session) {
    return Response.json(null, { status: 401 });
  }
  // Read body contents
  try {
    const body = await request.json();
    const { task, title } = body;
    if (!title) {
      throw new Error('bad request');
    }

    try {
      const username = session.user?.email;
      if (task) {
        // TODO: If task ID provided, edit task
      } else {
        // TODO: If no task ID, create task
        await createTask(username || '', title);
      }
      return new Response();
    } catch (err) {
      return Response.json(null, { status: 500 });
    }
  } catch (err) {
    return Response.json(null, { status: 400 });
  }
}
