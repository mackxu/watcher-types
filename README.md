# watcher-types
Watcher 从字段到函数的推导

> 注意参数的类型推导

## 代码演化一

```ts
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
```

## 代码演化二

```ts
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
```

## 代码演化三
```ts
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
```
