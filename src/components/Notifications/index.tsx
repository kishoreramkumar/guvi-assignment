import styles from "./index.module.scss";

function Notifications({ notificationList }: any) {
  return (
    <div className={styles.NotificationsWrapper}>
      {notificationList?.map((notification: any) => (
        <div
          className={`${styles.Notification} ${
            notification?.type === "Success" ? styles.Success : styles.Error
          }`}
        >
          {notification?.title}
        </div>
      ))}
    </div>
  );
}

export default Notifications;
