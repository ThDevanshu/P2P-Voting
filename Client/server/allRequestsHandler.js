import Gun from "gun";

const db = Gun([process.env.NEXT_PUBLIC_RELAY_URL]);

const addRquestedUser = async (data) => {
  if (data) {
    const node = await db
      .get(process.env.NEXT_PUBLIC_REQUESTED_USERS)
      .get(data.id)
      .put(data);
    return node;
  } else {
    return null;
  }
};

const voteUser = async (data) => {
  let userPrevData;
  await db
    .get(process.env.NEXT_PUBLIC_APPROVED_USERS)
    .get(data)
    .once(async (m) => {
      const userUpdatedData = await db
        .get(process.env.NEXT_PUBLIC_APPROVED_USERS)
        .get(data)
        .put({ votes: m.votes + 1 });
      return true;
    });
  return true;
};

const acceptRequestedUser = async (data) => {
  const deleteFromRequested = await db
    .get(process.env.NEXT_PUBLIC_REQUESTED_USERS)
    .get(data.id)
    .put(null);
  const addInApproved = await db
    .get(process.env.NEXT_PUBLIC_APPROVED_USERS)
    .get(data.id)
    .put(data);
  return addInApproved;
};

const rejectRequestedUser = async (data) => {
  const deleteFromRequested = await db
    .get(process.env.NEXT_PUBLIC_REQUESTED_USERS)
    .get(data.id)
    .put(null);
  return deleteFromRequested;
};

export { addRquestedUser, rejectRequestedUser, acceptRequestedUser, voteUser };
