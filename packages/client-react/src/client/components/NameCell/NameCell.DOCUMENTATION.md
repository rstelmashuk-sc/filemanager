### Synopsis

NameCell is 
*Write here a short introduction and/or overview that explains **what** component is.*

### Props Reference

| Name                           | Type                    | Description                                                 |
| ------------------------------ | :---------------------- | ----------------------------------------------------------- |
| demoProp                       | string                  | Write a description of the property                         |

### Code Example

```
{React.createElement(NameCell({
  loading: false,
  getIcon: () => {
    return new Promise((resolve, reject) => {
      const srcImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT8Y0yepGj1ZRZfcQR3oEJpoVJESDiT8aoEw&usqp=CAU'
      const icon = {
        svg: `<img src=${srcImg} alt="icon"/>`,
        fill: 'rgba(0, 0, 0, 0.72)'
      }
      resolve(icon)
    })
  }
}), { cellData: 'File name' })}
```

### Component Name

NameCell

### License

Apache License Version 2.0


