import React from "react";

import {userMessages} from "./messages";

import MessageCard from "./message-card";

export default function Component() {
  return (
    <MessageCard
      avatar="https://d2u8k2ocievbld.cloudfront.net/memojis/male/6.png"
      message={userMessages[0]}
    />
  );
}
