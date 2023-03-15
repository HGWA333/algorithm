// 힙 정렬 = 힙 정렬은 힙트리 구조를 이용하는 정렬 방법 으로 이진 트리 형식으로 이루어져 있다.

// --------------------- 이진 트리, 완전 이진 트리 --------------------------------

// 이진 트리 종류 = 이진 트리,완전 이진 트리,
// 이진 트리 = 각 노드를 담은 뒤 노드를 두 개씩 이어 붙이는 방식으로 이루어진 구조 이진 트리는 모든 노드의 자식 노드가 2개 이하인 노드
// 완전 이진 트리 = 데이터가 루트(Root) 노드부터 시작해서 자식 노드가 왼쪽 자식 노드, 오른쪽 자식 노드로 차근차근 들어가는 구조의 이진 트리

// 이진 트리 구조
// 루트 (Root) 최상단 상위
// 리프 (Leaf) 최상단 기준에서 밑으로 뻣어나감

// 예)   1
//    2  -  3
//   4-5   Void

// 여기서 이진 트리의 리프는 4-5, 3이 된다. 4-5의 부모는 2,  2,3의 부모는 1 형식

// 완전 이진 트리 구조
// 루트 (Root) 최상단 상위
// 리프 (Leaf) 최상단 기준에서 밑으로 뻣어나감

// 예)   1
//    2  -  3
//   4-5   Void

// 여기서 완전 이진 트리의 리프는 4, 3이 된다. 5의 부모는 4 / 4의 부모는 3이 된다.

// --------------------- 힙 정렬 구조  --------------------------------
// 최대 힙 =  힙 정렬은 루트(Root)가 리프 (Leaf)보다 값이 커야 한다.

// 예)   11
//    5  -  8
//   7-4   Void

// 힙 생성 알고리즘 = 위와 같은 상황에서 부모 5 자식 7, 4는 최대 힙 상태가 아니다.
// 그래서 이것을 해결 하기 위해 힙 생성 알고리즘을 사용한다. 힙 생성 알고리즘은 부모 5가 가진 자식 7, 4중에서 가장 높은 값을 교체 하는 것을 말한다.
// 이것을 맨 아래에 있는 리프위치 까지 반복을 한다.

// 힙 정렬 시간 복잡도 O(log N)
// 가로 넓이 N * 세로 높이 log N = O(logN) = N * log2N
// 힙 정렬 실제 시간 복잡도 = (1/2N or 0.5N) * logN
// 전체 트리를 힙으로 만드는 시간 복잡도 = (1/2N or 0.5N) * log2N = O(N)
// N번 수만큼의 시간이 소요가 되어 굉장히 빠르다

// 예) [1,5,7,3,2] 만약 N의 데이터 배열의 요소 갯수가 5개라 가정을 하면
// 5*log2 연산하면 2.6312421..... 수가 나온다.  여기서 반올림을 하면 3이 된다.(만약 2.323322323......이 나오면 내림수를 적용하여 2를 사용하면 된다.)
// 그래서 힙 정렬의 높이는 3이 된다

// [7, 6, 5, 8, 3, 5, 9, 1, 6] = 배열 속 요소들을 힙 구조로 만드는 연산 시간은 9번만 연산을 하면 된다.
// 예)   7
//    6  -  5
//   8 - 3   5 - 9
// 1 - 6

// 실제 힙구조는 전체 배열의 요소 갯수중에 1/2 만큼만 보면 된다. 0.5N * logN = 1/2 * logN
// 위 배열의 요소는 9개가 있다. 이 배열을 1/2로 나누면  4.5가 나오고 여기서 내림수를 하여 소숫점을 삭제를 하면 4가 된다.
// 4번만 연산하여 힙 구조를 만들 수 있게 된다. 이때 상향식 혹은 하향식으로 구조를 만들 수 있다.

// 힙 구조 만들 때 작동 방식

// 0) 최초 상태 -> 1) 1회 작동 -> ... 4) 4회 작동

// 0)    7
//    6  -  5
//   8 - 3   5 - 9
// 1 - 6

// 1)    7
//    8  -  5
//   6 - 3   5 - 6
// 1 - 9

// 2)    8
//    7  -  5
//   6 - 3   5 - 9
// 1 - 9

// 3)    1
//    7  -  5
//   6 - 3   5 - 6
// 8 - 9  <----- 배열 요소 중 가장 높은 값이 맨 하위 리프에 위치하면 이것은 정렬이 이루어진 상태로 컴퓨터는 인식한다.

// 4)    1
//    6  -  5
//   7 - 3   5 - 6
// 8 - 9  <----- 힙 구조 만들어진 상태

// 총 4회 작동 하여 logN = O(N) 이라고 본다.

let number = 9;

let heap = [7, 2, 4, 8, 1, 3, 9, 5, 6];

const HeapSort = () => {
  // 전체 트리 구조를 힙 구조로 바꾸는 과정
  for (let i = 1; i < number; i++) {
    // 1부터 시작하여 전체 원소의 힙 구조를 만들기 위한 용도
    let c = i;

    do {
      let root = (c - 1) / 2;
      // root는 자기 자신의 부모의 의미 하는 것으로
      // (c - 1) / 2 연산을 하게 되면 특정한 원소의 부모를 가르키게 된다.

      if (heap[root] < heap[c]) {
        // 부모의 값보다 자식의 값이 더 크다면
        let temp = heap[root];
        heap[root] = heap[c];
        heap[c] = temp;
        // 부모와 자식의 위치를 바꾸기 위한 용도
      }
      c = root; // 재귀함수 역할과 비슷
    } while (c != 0);
  } // 여기까지 완료가 되면 힙구조가 완성이 된다.

  // 여기서 부터 크기를 줄여가며 반복적으로 힙을 구성하는 과정
  for (let i = number - 1; i >= 0; i--) {
    let temp = heap[0];
    heap[0] = heap[i];
    heap[i] = temp;
    // 여기서 heap[0] index에 위치한 값은 가장 큰 값이다.
    // 여기서 heap[i] index 맨뒤로 보내 오름차순으로 정렬이 된다.
    // 최상단 루트 노드와 최하단 루트 노드와 바꿔주기 위한 용도

    let root = 0;
    // 루트의 위치를 0 으로 잡는다.
    let c = 1;
    // c는 루트의 자식이 된다.

    do {
      c = 2 * root + 1;

      if (heap[c] < heap[c + 1] && c < i - 1) {
        // 자식 중에 더 큰 값을 찾기 위한 과정
        c++;
      }

      if (heap[c] < heap[c + 1] && c < i - 1) {
        // 루트보다 자식이 더 크다면 교환 하는 과정
        let temp = heap[root];
        heap[root] = heap[c];
        heap[c] = temp;
        c++;
      }
      root = c;
    } while (c < i);
    // 재귀적으로 돌리는 식
  }
  for (let i = 0; i < number; i++) {
    console.log("힙 정렬 완료:", heap[i]);
  }
};