import React from 'react';

function User({pulluser}) {
  return(
    <div>
      <b>{pulluser.username}</b> <span>({pulluser.email})</span>
    </div>
  );
}

function UserList() {
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ];
  return (
    <div>
      {users.map(pulluser => (
        <User pulluser={pulluser} key={pulluser.id}/>
      ))}
    </div>
  );
}

export default UserList;