// 삽입 정렬 = 각 배열의 숫자를 적절한 위치에 삽입하는 방법으로 필요할 때만 위치를 바꾸게 되는 것이다.
// 삽입 정렬은 이미 정렬이 되어 있다면 고정이 되고 정렬이 안된 것을 다시 찾아 정렬 시킨다.
// 한번 정렬 이후 배열 요소가 왼쪽에 있으면 정렬이 되어있다고 가정을 하기 때문이다. 멈출 포이트를 알고 있다는 말
// 그렇기 때문에 연산의 횟수가 적어지고 효율성이 높다.
// 삽입 정렬은 버블정렬과 같이 3가지 변수 i, j, temp를 사용한다.

// 삽입 정렬 시간 복잡도 O(N^2)

const insert = () => {
  let i; // 배열의 원소를 반복적으로 탐색하기 위한 용도 1
  let j; // 배열의 원소를 반복적으로 탐색하기 위한용 도 2
  let temp; // 특정한 두 숫자를 서로 필요할 위치에 바꾸기 위해 사용

  let tempArr = [1, 10, 5, 3, 8, 9, 4, 2, 6]; // 가장 작은 숫자를 앞으로 정렬 하기 위한 목적물

  for (let i; i < 9; i++) {
    j = i;
    while (tempArr[j] > tempArr[j + 1]) {
      temp = tempArr[j];
      tempArr[j] = tempArr[j + 1];
      tempArr[j + 1] = temp;
      j--;
    }
  }
  for (i = 0; i < 10; i++) {
    console.log("삽입 정렬:", tempArr[i]);
  }
  return 0;
};

// 삽입 정렬의 시간 복잡도는 O(N^2)다.

// 삽입 정렬의 특징은 앞서 설명한 것 처럼 기본적으로 정렬이 되어있다고 가정을 한다는 점이 특징으로

// 시간 복잡도는 O(N^2)를 사용하는 선택, 버블 등등과 놓고 비교를 했을 때는 연산의 횟수가 가장 적어 빠를 수 있다.

// 만약 왼쪽 방향으로 이미 정렬이 되어있는 [2,3,4,5,6,7,8,9,10,1]과 같은 배열의 요소가 있다면, 그것을 건너띄고 연산을 하기 때문이다.

// 하나의 배열에 10개의 원소가 담겨져 있다고 가정을 하면 [1,2,3,4,5,6,7,8,9,10]

// 10 + 9 + 8 + .. + 1 는 등차수열로  10 * (10 + 1) / 2 = 55 즉 55를 연산을 한다.

// 만약 10,000개의 데이터가 있다면 10,000 * 10,000으로 100,000,000 1억번 정도 연산을 해야 한다.

// 10 * (10 + 1) / 2을 수식으로 표현 하면 N * (N + 1) / 2

// N * (N + 1) / 2 = N * N 과 같음

// O(N * N)으로 축약해서 사용하고 이걸 비고표기법이라고 함