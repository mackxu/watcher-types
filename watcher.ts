type Watcher<T> = {
  on(
    eventName: `${keyof T & string}Changed`,
    callback: (oldVal: any, newVal: any) => void,
  ): void,
}

declare function watch<T>(obj: T): Watcher<T>;

const personWatcher = watch({
  firstName: 'zhang',
  lastName: 'sanfeng',
  age: 105,
  sex: '男'
});

personWatcher.on('ageChanged', (oldVal, newVal) => {});
