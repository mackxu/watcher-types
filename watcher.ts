type Watcher = {
  on(eventName: string, callback: (oldVal: any, newVal: any) => void): void,
}

declare function watch(obj: object): Watcher;

const personWatcher = watch({
  firstName: 'zhang',
  lastName: 'sanfeng',
  age: 105,
  sex: '男'
});

personWatcher.on('firstNameChanged', (oldVal, newVal) => {});
