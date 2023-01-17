# Proxy란?

1. 클라이언트를 통해서 다른 네트워크 서비스에 간접적으로 접속할 수 있게 해주는 컴퓨터 시스템이나 응용 프로그램
2. 클라이언트와 서버 사이에 중간 과정

# Proxy 작동 방식

1. 클라이어트가 서버에 요청을 보낼 때 중간에 자기 자신(proxy)을 가로채서 자신(proxy)을 보낸 것처럼 서버에 요청을 보낸다.
2. proxy는 클라이언트와 서버 사이에 중간 과정
3. VPN는 우회 프로그램, proxy와 비슷한 개념이다.
4. 서버에 요청 시 자신(클라이언트,사용자)의 데이터를 숨길 수 있다.

# Proxy 이용 시 서버와 통신

1. A, B, C 컴퓨터 총 3대가 크롬으로 접속
2. 서버에 가기전 Proxy에 방문
3. Proxy 방문 이후 Sever 접속
4. Server에서는 요청을 Proxy에서 보낸 것으로 인식

# Reverse Proxy란?

1. proxy와 반대 역할을 하는 기능이다.
2. 요청을 보낼 때(클라이언트)가 아닌 요청을 받은 후 (서버)에 처리한다.
3. 서버(A)가 요청을 받은 후 다른 서버(B)에 요청을 보내서 응답을 받고, 해당 응답을 서버 자신(A)가 응답하는 것처럼 클라이언트에 응답한다.

# Reverse Proxy 작동 방식

\*. EC2 인스턴스에서 요청을 받았을 때 (React, Node.js, mysql 기준)

1. 클라이언트(크롬을 사용하는 사용자) 접속 "클라이언트 영역"

2. EC2 인스턴스 (Apache Reverse Proxy 설정) "서버 영역"
3. Root 폴더 Apache에서 설정된 Root 폴더로 HTML 파일을 연결 "서버 영역"
4. Node.js로 구현된 Express 서버 (8080 port)로 연결 "만약 /api 라우터로 요청 시 Node.js의 Express 서버로 요청을 보냄" "서버 영역"
