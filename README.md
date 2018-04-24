# css-course

- des
this demo is show horizontally and vertical center for div(block) in the parent component   
this demo is show horizontally and vertical center for span(inline-block) in the parent component   

- usage
```
cd egs
npm run dev
```

- target 
1. inline-block 垂直居中
2. block        水平垂直居中
3. 栅格布局     （bootstrap ...）
4. Flexbox 布局 （参考 http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html ）


## advanced 

1. 02 -- > 主要是 @media 媒体查询 根据不同的屏幕 展示不同的背景
```
// mobile 移动设备断点，视窗宽度 ≤ 768 px
@media (max-width: 768px) {
    ul.ex01 {
        background: #999;
    }
}
// tablet 平板电脑设备断点，视窗宽度 ≥ 769 px
@media (min-width: 769px) and (max-width: 1023px) {
    ul.ex01 {
        background: #777;
    }
}

// desktop 桌面电脑断点，视窗宽度 ≥ 1024 px
@media (min-width: 1024px) and (max-width: 1216px) {
    ul.ex01 {
        background: #666;
    }
}

// widescreen  宽屏电脑断点，视窗宽度 ≥ 1216 px
@media (min-width: 1216px) and (max-width: 1408px) {
    ul.ex01 {
        background: #555;
    }
}

// fullhd  高清宽屏电脑断点，视窗宽度 ≥ 1408 px...
@media (min-width: 1408px ) {
    ul.ex01 {
        background: #333;
    }
}

```




