---
title: 离散数学自学整理汇总
tags: ['基础学科']
category: 笔记
description: 离散数学是计算机专业必修数学课之一, 本文记录了数理逻辑/代数结构/图相关知识
---

> 为了考试周不破防, 准备系统地~~预习~~复习一遍**离散数学**, 参考了**高等教育出版社**的**离散数学(第 2 版)**, 这篇博文用于记录各种知识点以及后续的大作业代码实现及思路

# 数理逻辑

## 命题逻辑

### 命题

#### 定义

具有**真假意义**的**表达判断**的**陈述句**为**命题**

#### 分类

按真值

- 真命题
- 假命题

按能否再分:

- 原子命题(简单命题)
- 复合命题

#### 标识符

大写字母/带下标的大写字母/[]包围的数字 都是合法的命题标识符

> $A, B, A_i, [12]$

表示确定命题的标识符为**命题常元**, 表示命题位置,并不代表具体某个命题的标识符称为**命题变元**

### 联结词

命题之间可以由联结词联结组成新的命题, 常见联结词如下

#### 否定联结词

非 $\neg$ `$\neg$`

| $P$ | $\neg P$ |
| --- | -------- |
| $0$ | $1$      |
| $1$ | $0$      |

> 最简单的联结词之一, 取反, 常见语言表述为 "不, 没有..."

#### 合取联结词

且 $\land$ `$\land$`

| $P$ | $Q$ | $P\land Q$ |
| --- | --- | ---------- |
| $0$ | $0$ | $0$        |
| $0$ | $1$ | $0$        |
| $1$ | $0$ | $0$        |
| $1$ | $1$ | $1$        |

#### 析取联结词

或 $\lor$ `$\lor$`

| $P$ | $Q$ | $P\lor Q$ |
| --- | --- | --------- |
| $0$ | $0$ | $0$       |
| $0$ | $1$ | $1$       |
| $1$ | $0$ | $1$       |
| $1$ | $1$ | $1$       |

> 需要注意与自然语言中的**或**区分, 数理逻辑中的或为**可兼或**, 即$P,Q$可以同时发生, 但是自然语言中还有**排斥或**, 不可同时发生, 此时就不能使用$P\or Q$表示这一命题, 需要根据真值表构造新的命题, 在以后的章节中会提到

#### 蕴含联结词

如果...则... $\to$ `$\to$` `$\rightarrow$`

| $P$ | $Q$ | $P\rightarrow Q$ |
| --- | --- | ---------------- |
| $0$ | $0$ | $1$              |
| $0$ | $1$ | $1$              |
| $1$ | $0$ | $0$              |
| $1$ | $1$ | $1$              |

#### 等价联结词

当且仅当 $\leftrightarrow$ `$\leftrightarrow$`

| $P$ | $Q$ | $P\leftrightarrow Q$ |
| --- | --- | -------------------- |
| $0$ | $0$ | $1$                  |
| $0$ | $1$ | $0$                  |
| $1$ | $0$ | $0$                  |
| $1$ | $1$ | $1$                  |

> 以上联结词具有以下优先级(从高到低)
>
> $$
> (), \lnot , \land , \lor , \rightarrow , \leftrightarrow
> $$

### 命题公式之间的关系

#### 逻辑等价

双重否定率

$$
A\iff \lnot \lnot A
$$

幂等率

$$
A\iff A \lor A \\
A\iff A \land A
$$

交换律

$$
A\lor B\iff B \lor A \\
A\land B\iff B \land A
$$

结合律

$$
(A\lor B)\lor C\iff A\lor (B\lor C) \\
(A\land B)\land C\iff A\land (B\land C)
$$

分配律

$$
A\lor (B\land C)\iff (A\lor B)\land(A\lor C) \\
A\land (B\lor C)\iff (A\land B)\lor(A\land C)
$$

**德摩根律**

$$
\lnot (A\lor B)\iff\lnot A\land \lnot B \\
\lnot (A\land B)\iff\lnot A\lor \lnot B
$$

吸收律

$$
A\lor (A\land B)\iff A \\
A\land (A\lor B)\iff A
$$

零律

$$
A \lor 1 \iff 1 \\
A \land 0 \iff 0
$$

同一律

$$
A \land 1 \iff A \\
A \lor 0 \iff A
$$

排中律

$$
A \lor \lnot A \iff 1
$$

矛盾律

$$
A \land \lnot A \iff 0
$$

**蕴含律**

$$
A \rightarrow B \iff \lnot A \lor B
$$

等价律

$$
A \leftrightarrow B \iff (A\rightarrow B)\land(B \rightarrow A)
$$

假言易位律

$$
A\to B \iff \lnot B \to \lnot A
$$

等价否定律

$$
A \leftrightarrow B \iff \lnot A \leftrightarrow \lnot B
$$

归谬率

$$
(A\to B)\land(A \to \lnot B)\iff \lnot A
$$

#### 逻辑蕴含

若$A\to B$是**重言式**, 则有$A\implies B$, 称为**A 逻辑蕴含 B**

推理定律如下

附加律

$$
A \implies A\lor B
$$

化简律

$$
A \land B \implies A
$$

假言推理

$$
(A\to B)\land A \implies B
$$

拒取式

$$
(A \to B)\land \lnot B \implies \lnot A
$$

析取三段论

$$
(A \lor B)\land \lnot B \implies A
$$

假言三段论

$$
(A\to B)\land (B\to C) \implies A \to C
$$

等价三段论

$$
(A \leftrightarrow B)\land (B \leftrightarrow C)\implies A \leftrightarrow C
$$

构造性二难

$$
(A\to B)\land(C\to D)\land(A \lor C)\implies B\lor D
$$

破坏性二难

$$
(A\to B)\land(C\to D)\land(\lnot B\lor \lnot D) \implies \lnot A \lor \lnot C
$$

### 对偶

#### 定义

对于只包含$\lnot,$ $\land$和$\lor$的命题公式$A$,互换 $\land$和$\lor$,$0$和$1$, 得到的新命题公式$A^*$称为$A$的对偶式

#### 性质

- 设$A$为命题公式,$P_n$为命题公式中的命题变元,$A^*$是$A$的对偶式,则

$$
\lnot A(P_1,P_2,\cdots,P_n) \iff A^*(\lnot P_1,\lnot P_2,\cdots,\lnot P_n) \\
A(\lnot P_1,\lnot P_2,\cdots,\lnot P_n) \iff \lnot A^*(P_1,P_2,\cdots,P_n)
$$

- 若$A \iff B$, 则$A^* \iff B^*$

### 范式

#### 概念

**文字** 命题变元和命题变元的否定

> 如$P,\lnot P$

**简单析取式** 仅由有限个文字构成的析取式

> 如$P\lor$$\lnot Q$

**简单合取式** 仅由有限个文字构成的合取式

> 如$P\land$$\lnot Q$

> 一个文字既是简单合取式也是简单析取式

**析取范式** 仅由有限个简单合取式构成的析取式

**合取范式** 仅由有限个简单析取式构成的合取式

**范式** 析取范式和合取范式统称为范式

> 简单析取式和简单合取式都既是析取范式也是合取范式

---

**极小项** 含有$n$个命题变元, 每个命题变元和他的否定式有且只有一个, 且按照(字典)顺序排列的简单合取式

> $n$个命题变元有$2^n$个极小项, 两两互不逻辑等价, 所有最小项析取式永真
>
> 每个极小项有且仅有一个成真赋值, 记作$m_i, \ i$为十进制下的成真赋值
>
> 任两个不同极小项的合取式永假

**极大项** 含有$n$个命题变元, 每个命题变元和他的否定式有且只有一个, 且按照(字典)顺序排列的简单析取式

> $n$个命题变元有$2^n$个极大项, 两两互不逻辑等价, 所有最大项的合取式永假
>
> 每个极大项有且仅有一个成假赋值, 记作$m_i, \ i$为十进制下的成真赋值
>
> 任两个不同极大项的析取式永真

**主析取范式** 有限个极小项构成的析取式

**主合取范式** 有限个极大项构成的合取式

**主范式** 主析取范式和主合取范式统称为主范式

> 任何命题公式都存在**唯一**与之逻辑等价的主析取范式和主合取范式

#### 求范式步骤

**范式存在定理** 任一命题公式都存在与之逻辑等价的析取范式和合取范式

1. 消去$\rightarrow$ ,$\leftrightarrow$
   $$
   A\to B\iff \lnot A\lor B \\
   A \leftrightarrow B \iff A\to B \land B\to A
   $$
2. 消去$\lnot$$\lnot$
   $$
   \lnot\lnot A\iff A
   $$
3. 消去$\lnot ()$ //内移$\lnot$
   $$
   \lnot(A\land B)\iff \lnot A\lor \lnot B	\\
   \lnot(A\lor B)\iff \lnot A\land \lnot B
   $$
4. 分配$\land$,$\lor$

   $$
   A\lor(B \land C)\iff (A\lor B)\land(A \lor C)	\\
   A\land (B \or C) \iff (A\land B)\lor(A\land C)
   $$

5.

**求主范式** 在求出范式的基础上, 添加缺少的项组成**最小/最大项**即可

### 命题演算推证

**定义** 由**推理根据**, **推理规则**和**证明方法**组成

#### 推理根据

推理根据是命题验算的命题定律和推理定律, 主要为**逻辑等价式**和**逻辑蕴含式**

#### 推理规则

- **P 规则/前提引入规则** 在推论的任何步骤中引入前提
- **T 规则/结论引入规则** 所得到的结论作为后续的前提
- **CP 规则/附加前提规则**

## 谓词逻辑

### 谓词和个体

**论域** 个体变元的取值范围

**全总个体域** 宇宙间一切个体组成的论域

**谓词** 刻画论域中个体性质的模式

**简单命题函数** $P(x_1,x_2,\cdots)$

> **特性谓词** 一般用于在全总个体域中声明事物特性的谓词, 如: $F(x):x$是人

### 量词

**全称量词** $\forall$

> 特性谓词一般做蕴含的**前件**, $\forall x(F(x)\to G(x))$

**存在量词** $\exist$

> 特性谓词一般做**合取项**, $\exist x(F(x)\land G(x))$

### 谓词公式

由命题变元, 联结词和括号按照一定的规则组成的字符串称为**谓词公式**

**原子谓词公式** $P(x_1,x_2,\cdots)$

### 自由与约束

**指导变元/作用变元** $\forall xA$或$ \exist xA$中, $x$称为量词的**指导变元**, $A$称为量词的辖域

**封闭的公式/闭式** 不含自由出现个体变元的公式

### 逻辑等价

#### 命题公式推广

$$
\lnot \lnot \forall xF(x)\iff \forall F(x)	\\
\forall xF(x)\to \exist yG(y) \iff \lnot xF(x)\lor \exist yG(y)	\\
\lnot(\forall xF(x)\lor \exist yG(y))\iff \lnot\forall xF(x) \land \lnot\exist yG(y)
$$

#### 否定逻辑等价式

$$
\lnot \forall P(x) \iff \exist x(\lnot P(x))	\\
\lnot \exist P(x) \iff \forall x(\lnot P(x))
$$

#### 辖域扩张与收缩

$$
\lnot(\forall xF(x)\lor G)\iff \lnot\forall xF(x)\lor G	\\
\cdots
$$

#### 量词分配

$$
\forall x(A(x)\land B(x))\iff \forall xA(x)\land\forall xB(x)	\\
\exist x(A(x)\lor B(x))\iff \exist xA(x)\lor \exist xB(x)
$$

### 前束范式

若一个公式的量词都在最前边且其辖域一直延伸到末尾, 则其为**前束范式**

> 没有量词的前束范式称为**平凡的前束范式**

---

# 集合论

## 二元关系

### 二元关系

仅含有序对的集合或此意义下的空集

#### 定义

设$A$,$B$为集合, $A\times B$的任何子集称为从$A$到$B$的**二元关系**, 记为$R\subseteq$$A\times B$

若$R\subseteq$$A\times A$则$R$为$A$上的二元关系

> 若集合$A$有 n 个元素, 则有$2^{n^m}$个$m$元关系

#### 特殊关系

**空关系** $\varnothing$

**全域关系** $E=A\times B$

**恒等关系** $I_A = \{<x,x>|x\in A\}$

> 其他常用关系
>
> **小于等于关系** $L_A = \{<x,y>|x,y\in A \land x\leq y\}$
>
> **整除关系** $D_A = \{<x,y>|x,y\in A \land x是 y的因子\}$
>
> **包含关系** $R_{\subseteq}=\{<x,y>|x,y\in A\land x\subseteq y\}$

#### 表示

**列举法**

**描述法**

**矩阵表示法** 使用**关系矩阵**表示二元关系, 只适用于有限集

$$
M_R=(r_{ij})_{m\times n} \\
r_{ij} = \begin{cases}
   1 &,a_iRb_j \\
   0 &,a_i \tilde{R} b_j
\end{cases}
$$

**关系图表示法**

### 性质

**自反性**

$$
\forall x(x\in A\to <x,x>\in R)
$$

> 关系图上每个结点都有环
>
> 关系矩阵主对角线上元素均为 1

**反自反性**

$$
\forall x(x\in A\to <x,x>\notin R)
$$

> 空关系是$A$上的反自反关系

> 关系图上每个结点均无环
>
> 关系矩阵主对角线上的元素均为 0

**对称性**

$$
\forall x\forall y(x,y\in A\and <x,y>\in R\to<y,x>\in R)
$$

> 关系矩阵是对称矩阵
>
> 关系图上两结点间若有边则一定有方向相反的两个边

**反对称性**

$$
\forall x\forall y(x,y\in A\and <x,y>\in R\to<y,x>\in R)
$$

> 关系矩阵如果$r_{ij}=1$且$i\neq j$则$r_{ji}=0$
>
> 关系图上两结点间若有边则一定是单向边

**传递性**

$$
\forall x\forall y\forall z(x,y,z\in A\land <x,y>\in R\land<y,z>\in R\to<x,z>\in R)
$$

> $M^2$中 1 的位置关系矩阵$M$中也为 1
>
> 关系图上的边有传递性

### 运算

设$R$为二元关系

**定义域** 有序对第一元素构成的集合

$$
domR=\{x|\exist y(<x,y>\in R)\}
$$

**值域** 有序对的第二元素构成的集合

$$
ranR=\{y|\exist x(<x,y>\in R)\}
$$

**域**

$$
fldR=domR\cup ranR
$$

**限制**

$$
R\upharpoonright A=\{<x,y>|xRy \land x\in A\}
$$

**像**

$$
R[A]=ran(R\upharpoonright A)
$$

**逆运算**

$$
R^{-1}=\{<x,y>|<y,x>\in R\}
$$

**复合运算**

$$
R\circ S=\{<x,y>|\exist z\land(xRz\land zSy)\}
$$

> 注意$R\circ S\neq S\circ R$

> 幂运算由复合运算产生

### 闭包

为现有关系$R$**尽可能少**地添加有序对使其具有新的性质, $R'$称为$R$的闭包

**自反闭包**

$$
r(R)=R\cup R^0	\\
M_r = M + E
$$

**对称闭包**

$$
s(R)=R\cup R^{-1}	\\
M_s=M+M^T
$$

**传递闭包**

$$
t(R)=R\cup R^{2}\cup R^{3}\cup \cdots	\\
M_t = M + M^2 + M^3 + \cdots
$$

> 此处+为逻辑加

> 使用关系图闭包较为简单, 不再赘述

### 等价关系

若非空集合$A$上的关系$R$是**自反,对称且传递**的, 则$R$为$A$上的等价关系, 若$<x,y>\in R$记作$x\sim y$

#### 等价类

设非空集合$A$上的关系$R$为等价关系, $\forall x\in A$ , 则$[x]_R$为$x$关于$R$的等价类

$$
[x]=\{y|y\in A\land xRy\}
$$

#### 商集

设非空集合$A$上的关系$R$为等价关系, 则有$R$关于$A$的商集$A/R$

$$
A/R=\{[x]_R | x\in A\}
$$

#### 划分

- 集合运算求划分
- 关系矩阵求划分
- 关系图求划分

### 相容关系

若非空集合$A$上的关系$R$是**自反,对称**的, 则$R$为$A$上的相容关系

> 所有等价关系都是相容关系
>
> 相容关系可用简化图与下三角矩阵表示
>
> 相容关系不能确定划分

#### 相容类

若$x,y\in C$有$xRy$, 则$C$是$A$的一个相容类

若$C$不是任何相容类的真子集, 则$C$是最大相容类

> 简化关系图上:
>
> - 最大完全多边形的顶点构成的集合
> - 孤立点构成的集合
> - 非完全多边形的边的端点构成的集合
>
> 是最大相容类

#### 覆盖

若$A$的子集族$\pi$满足$\varnothing $$\notin$$\pi$, $\cup _{x\in\pi} x=A$则$\pi$为$A$的一个覆盖

由$R$最大相容类构成的$A$的覆盖是**完全覆盖**

### 偏序关系

若非空集合$A$上的关系$R$是**自反**,**反对称**且**传递**的, 则$R$为$A$上的偏序关系, 记作$\leq$

集合$A$与$\leq$一起组成的有序对$<A,\leq>$称为**偏序集**

#### 全序关系

设$<A,\leq>$是偏序集, $\forall x,y\in A, x与y均可比$, 则$\leq$是$A$上的全序关系(线序关系), $<A,\leq>$是全序集

#### 盖住关系

设$<A,\leq>$是偏序集, $\forall x,y\in A \land (\not\exist z\in A\land x\leq z\leq y)$, 则$y$**盖住**$x$

$$
COV A=\{<x,y>|x,y\in A\land y盖住x\}
$$

#### 哈斯图

根据盖住关系绘制, $\circ$表示$A$中元素, $\forall x,y\in A$若

1. $x<y$, 则$x$在$y$下方
2. $<x,y>\in COV A$, 则用线连接

> 全序关系的哈斯图是一条线, 因此称为线序关系

#### 特殊元素

设$B\subseteq A, y\in B$, 则$y$是$B$的

**最小元** $\forall x(x\in B\to y\leq x)$

**最大元** $\forall x(x\in B\to x\leq y)$

**极小元** $\lnot \exist x(x\in B\land x<y)$

**极大元** $\lnot\exist x(x\in B\land y<x)$

设$B\subseteq A, y\in A$, 则$y$是$B$的

**上界** $\forall x(x\in B\to y\leq x)$

**下界** $\forall x(x\in B\to x\leq y)$

**上确界** $\{y\ |\ y为B的上界\}$

**下确界** $\{y\ |\ y为B的下界\}$

---

# 代数结构

## 代数系统

### 二元运算

设非空集合$S$, 则$S^n$到$S$的一个函数$f$为$S$上的$n$**元代数运算**

当$n=2$时称为**二元运算**, 记作$a_1*a_2=b$

**封闭性** 运算结果一定在$S$中

**唯一性** 参与运算的元素和其顺序都相同, 则结果一定相同

#### 二元运算性质

**交换律**

$$
a*b=b*a
$$

**结合律**

$$
a*(b*c)=(a*b)*c
$$

**分配律** $*$对$+$满足

$$
a*(b+c)=(a*c)+(b*c) \\
(b+c)*a=(b*a)+(c*a)
$$

**幂等律**

$$
a*a=a
$$

**吸收律** $*$和$+$满足

$$
a*(a+b)=a \\
a+(a*b)=a
$$

#### 单位元

**左单位元** $e_l*x=x$

**右单位元** $x*e_r=x$

若$e_l=e_r$, 则$e$为$S$上的**单位元**(幺元)

**左逆元** $y_l\circ x=e$

**右逆元** $x\circ y_r=e$

若$y_l=y_r$, 则 y 为 x 的**逆元**, $x$是**可逆的**

#### 零元

**左零元** $\theta_l*x=\theta_l$

**右零元** $x*\theta_r=\theta_r$

### 代数系统

**定义** 集合$A$与$A$上的$k$个运算所组成的系统$<A, \cdot_1,\cdot_2,\cdots,\cdot_k>$, 简称**代数**

**代数常数/特异元素** 如零元, 单位元, 也可出现在代数系统中$<A, \cdot_1,\cdot_2,\cdots,\cdot_k,e>$,

#### 子代数系统

对代数系统$V=<A, \cdot_1,\cdot_2,\cdots,\cdot_k>$,若$A_0 \subseteq A$, $A0$对运算$\cdot$封闭且$A$中代数常数与$A_0$相等, 则$<A_0, \cdot_1,\cdot_2,\cdots,\cdot_k>$也是代数系统, 且称为$V$的**子代数(系统)**

#### 积代数系统

设$V_1=<A_1,\cdot_1>$, $V_2=<A_2,\cdot_2>$,定义$A_1\times A_2$上的二元运算$\cdot$使得$\forall <x_1,y_1>,<x_2,y_2>\in A_1\times A_2$有$<x_1,y_1>\cdot <x_2,y_2>=<x_1\cdot_1x_2,y_1\cdot_2 y_2>$,则$<A_1\times A_2,\cdot>$是$V_1,V_2$的**积代数系统**

#### 同态

设$U=<X,\cdot>$, $V=<Y,*>$是两个同一类型的代数系统, $\exist f:X\to Y$对于$\forall x_1,x_2\in X$, 若

$$
f(x_1\cdot x_2)=f(x_1)*f(x_2)
$$

则$f:X\to Y$为$U$到$V$的**同态(映射)**

> 若$f:U\to U$则为**自同态**

> 若$f$**满射**, 则为**满同态**
>
> 若$f$**单射**, 则为**单同态**

#### 同构

> 若上述$f$**双射**, 则为**同构**

> 若$f:U\to U$则为**自同构**

# 群论

**群** 单位元, 逆元和一个可结合运算共同构成的代数系统

## 半群与独异点

$\cdot$是$G$上的二元代数且满足结合律, 则$<G,\cdot>$为**半群**, 其子代数系统为**子半群**

**独异点/含幺半群** $G$中含有$\cdot$的幺元, 若其子代数也含有, 则其为**子独异点**

## 群

**定义** 对独异点$<G,\cdot>$, 若$\forall a\in G$存在$a^{-1}\in G$使得$a\cdot a^{-1}=a^{-1}\cdot a=e$, 则$<G,\cdot>$为群

**有限群** $G$是有限集

**阶数** $|G|$

**平凡群** 只含有单位元

### 阶元

$a\in G$使得$a^k=e$的最小正整数$k$为$a$**的阶元**, 记作$|a|=k$, 称$a$为$k$阶元

> 若不存在这样的正整数$k$则$a$为无限阶元

**性质**

- 若$|a|=r$, $r$整除$k$, 则$a^k=e$
- $|a^{-1}|=|a|$

## 特殊群

...

---

# 图论

## 基本概念

> **无序积** $A\&B$ 记作$(a,b)=\{\{a,b\}|a\in A\land b\in B\}$

图定义为一个**三元组**$(V,E,\varphi)$

- **顶点(vertex)** 非空集合$V(G)$
- **边(edge)**
- $\varphi$ 边集合$E$到$V\& V$上的函数

### 度

图$G=<V,E>$中顶点$v$与所有边的**关联次数之和**为**度**, 记作$deg(v)$

**入度** 有序图中进入这一顶点的边的关联次数, 记作$deg^-(v)$

**出度** 有序图中离开这一顶点的边的关联次数, 记作$deg^+(v)$

**最大度** $\varDelta (G)$

**最小度** $\delta(G)$

### 握手定理

每个图中顶点度数等于边数的二倍

$$
\sum_{v\in V} deg(v) = 2|E|
$$

### 度数序列

$$
d=(d_1,d_2,\cdots,d_n)=(deg(v_1),deg(v_2),\cdots,deg(v_n))
$$

#### 可图化

非负整数列$d$可图化当且仅当$\sum_{i=1}^{n} d_i$为偶数

#### 可简单图化

> **哈韦尔-哈基米算法** 令$S=(d_{1},\dots ,d_{n})$为有限多个非负整数组成的非递增序列。$S$可简单图化当且仅当有穷序列$S'=(d_{2}-1,d_{3}-1,\dots ,d_{d_{1}+1}-1,d_{d_{1}+2},\dots ,d_{n})$只含有非负整数且是可简单图化的。

### 补图

**完全图** $G$中每一个顶点都与其余所有顶点相连, 则$K_n$为$n$阶完全图

**竞赛图** $G$为有向图则为$n$阶竞赛图

> $K_n$的边数为$\dfrac{n(n-1)}{2}=C_n^2$

给定图$G$中所有顶点和能使$G$成为完全图的所有**添加边**构成$G$的**补图**, 记作$\bar G$

### 子图

**生成子图** 去边法

## 连通性

**回路** 始点和终点相同的路径

## 树

连通无回路的无向图称为树

**树叶** 度数为 1 的顶点

**分支点** 度数大于 1 的顶点

### 性质

给定图$T$为树

- 无回路的连通图
- 无回路且$e=v-1$
- 连通且$e=v-1$
- 无回路但新增一条边则有且仅有一个回路
- 连通但删去一条边不再连通
- 每一对顶点之间有且仅有一条路

### 生成树

无向图$G$的**生成子图**$T$若为一棵树, 则$T$是$G$的生成树
