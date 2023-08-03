'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { TabItem } from './TabItem'
import { useState } from 'react'

export function SettingsTab() {
  const [currentTab, setCurrentTab] = useState('tab1')

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List
        className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200"
        aria-label="tabs example"
      >
        <TabItem
          title="My Details"
          value="tab1"
          isSelected={currentTab === 'tab1'}
        />
        <TabItem
          title="Password"
          value="tab2"
          isSelected={currentTab === 'tab2'}
        />
        <TabItem title="Team" value="tab3" isSelected={currentTab === 'tab3'} />
        <TabItem title="Plan" value="tab4" isSelected={currentTab === 'tab4'} />
        <TabItem
          title="Billing"
          value="tab5"
          isSelected={currentTab === 'tab5'}
        />
        <TabItem
          title="Email"
          value="tab6"
          isSelected={currentTab === 'tab6'}
        />
        <TabItem
          title="Notifications"
          value="tab7"
          isSelected={currentTab === 'tab7'}
        />
        <TabItem
          title="Integrations"
          value="tab8"
          isSelected={currentTab === 'tab8'}
        />
        <TabItem title="API" value="tab9 " isSelected={currentTab === 'tab9'} />
      </Tabs.List>
      <Tabs.Content value="my-details">Tab one content</Tabs.Content>
    </Tabs.Root>
  )
}
