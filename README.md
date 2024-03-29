# algorythm_prac

## code performance tracker

https://rithmschool.github.io/function-timer-demo/

## visualgo

https://visualgo.net/en/list

## Big O

### 빅오 표기법(big-O notation) 특징

Big-O(빅 오) 표기법 알고리즘 최악의 실행 시간을 표기한다. 가장 많이 사용하는 표기법이다. 최소한 보장되는 성능을 표기하기 때문에 가장 일반적으로 사용한다.

시간복잡도에 미미한 영향을 주는 것들은 배제하고 표기된다.

- 상수항을 무시

어떤 알고리즘이 O(N+5)의 복잡도를 가졌으면 상수를 생략해 O(N)으로 표기한다.

- 계수도 무시

어떤 알고리즘이 O(3N)의 복잡도를 가졌으면 계수를 생략해 O(N)으로 표기한다.

- 최고차항만 표기

어떤 알고리즘이 O(3N^3+2N^2+N+5)의 복잡도를 가졌으면 O(N^3)으로 표기한다.

## 빅오 표기법(big-O notation) 종류

실행 속도 O(1) < O(log N) < O(N) < O(N log N) < O(N^2) < O(2^N)

![image](https://github.com/rlagudals95/algorythm_prac/assets/76252074/3ca7bb00-752a-4263-ab0c-e4f307d12c7d)

- O(1)

입력값(N)이 증가해도 실행시간은 동일한 알고리즘, index로 접근하여 바로 처리할 수 있는 연산 과정의 시간 복잡도 → 기본 연산 수라고 생각하면 편함

ex) stack의 push, pop

- O(log N)

연산이 한 번 실행될 때 마다 데이터의 크기가 절반 감소하는 알고리즘 (log의 지수는 항상 2)

ex) binary search 알고리즘, tree 형태 자료구조 탐색

- O(N)

입력값(N)이 증가함에 따라 실행시간도 선형적으로 증가하는 알고리즘

ex) 1중 for문

- O(N log N)

O(N)의 알고리즘과 O(log N)의 알고리즘이 중첩된 형태

ex) 퀵 / 병합 / 힙 정렬

- O(N^2)

O(N)의 알고리즘과 O(log N)의 알고리즘이 중첩된 형태

ex) 2중 For 문, 삽입/거품/선택 정렬

- O(2^N)

빅오 표기법 중 가장 느린 시간 복잡도로 주로 재귀적으로 수행하는 알고리즘이 이에 해당

ex) fibonacci 수열

## 로그란?

아래의 일반화된 예시를 통해 로그의 정의를 알 수 있습니다.

![스크린샷 2023-11-19 오후 10 48 47](https://github.com/rlagudals95/algorythm_prac/assets/76252074/33c2e491-b766-4afa-833b-dca7d8e6b42d)

두 방정식 모두에서

로그형태로 지수방정식을, 혹은 지수형태로 로그방정식을 다시 나타낼 때, 로그의 밑은 지수의 밑과 같다는 것을 기억해두면 도움이 됩니다.
