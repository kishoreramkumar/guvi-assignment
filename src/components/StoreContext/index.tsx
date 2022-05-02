import React, { createContext, useState, useContext } from "react";

export const StoreContext = createContext({
  notificationList: [],
  pushNotification: (e: any) => {},
});

const initialItems: any = [];

function StoreProvider(props: any) {
  const [notificationList, setNotifications] = useState(initialItems);

  function popNotification() {
    const tempNotifications = [...notificationList];
    tempNotifications.pop();
    setNotifications(tempNotifications);
  }

  function pushNotification(notification: any) {
    setNotifications([...notificationList, notification]);
    setTimeout(() => {
      popNotification();
    }, 3000);
  }

  const storeData = { notificationList, popNotification, pushNotification };

  return <StoreContext.Provider value={storeData} {...props} />;
}

function useStoreContext() {
  return useContext(StoreContext);
}

export { StoreProvider, useStoreContext };
