import { auth } from '@/app/auth';
import { createTask, editTask } from '@/db/queries/tasks';

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
    const { taskId, title, progress } = body;
    if (!title || !progress) {
      throw new Error('bad request');
    }

    try {
      const username = session.user?.email;
      if (taskId) {
        // If task ID provided, edit task
        await editTask(username || '', taskId, title, progress);
      } else {
        // If no task ID, create task
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
