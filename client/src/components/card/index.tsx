import React from 'react';
import { userI } from '../../App';

interface Props {
  user: userI;
}

const Card: React.SFC<Props> = ({ user }) => (
  <div>
    <p>{user.gender}</p>
    <p>
      {user.name.first} {user.name.last}
    </p>
    <img src={user.picture.large} alt={user.name.title} />
  </div>
);

export default Card