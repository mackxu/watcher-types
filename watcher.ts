type Watcher<T> = {
  on<K extends keyof T>(
    eventName: `${K & string}Changed`,
    callback: (oldVal: T[K], newVal: T[K]) => void,
  ): void,
}

declare function watch<T>(obj: T): Watcher<T>;

const personWatcher = watch({
  firstName: 'zhang',
  lastName: 'sanfeng',
  age: 105,
  sex: '男'
});

personWatcher.on('sexChanged', (oldVal, newVal) => {});
