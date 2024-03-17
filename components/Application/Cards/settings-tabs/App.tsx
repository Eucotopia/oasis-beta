"use client";

import type {CardProps} from "@nextui-org/react";

import React from "react";
import {Card, Tabs, Tab} from "@nextui-org/react";
import {Icon} from "@iconify/react";

import AccountDetails from "./account-details";
import NotificationsSettings from "./notifications-settings";
import SecuritySettings from "./security-settings";

export default function Component(props: CardProps) {
  return (
    <Card {...props}>
      <Tabs
        classNames={{
          tabList: "mx-4 mt-6 text-medium",
          tabContent: "text-small",
        }}
        size="lg"
      >
        <Tab
          key="account-settings"
          textValue="Account Settings"
          title={
              <div className="flex items-center gap-1.5">
                  <Icon icon="mdi:web" width={20}/>
                  <p>Web</p>
              </div>
          }
        >
            <AccountDetails className="p-2 shadow-none" />
        </Tab>
        <Tab
          key="notifications-settings"
          textValue="Notification Settings"
          title={
              <div className="flex items-center gap-1.5">
                  <Icon icon="formkit:apple" width={20}/>
                  <p>Apple</p>
              </div>
          }
        >
            <AccountDetails className="p-2 shadow-none" />
        </Tab>
        <Tab
          key="security-settings"
          textValue="Security Settings"
          title={
              <div className="flex items-center gap-1.5">
                  <Icon icon="uil:android" width={20}/>
                  <p>Android</p>
              </div>
          }
        >
            <AccountDetails className="p-2 shadow-none" />
        </Tab>
      </Tabs>
    </Card>
  );
}
