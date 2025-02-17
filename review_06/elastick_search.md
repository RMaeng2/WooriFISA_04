### 엘라스틱 서치의 동작 원리
1. 데이터 저장 (색인, Indexing)
→ 문서(데이터)를 JSON 형식으로 저장함.
<br>
2. 데이터 분석 (토크나이저, Tokenizer)
→ 검색하기 쉽게 단어를 잘게 쪼갬.
<br>
3. 데이터 검색 (쿼리, Querying)
→ 원하는 데이터를 빠르게 찾아줌.

### HTTP 메서드
엘라스틱 서치는 REST API 기반으로 동작하기 때문에, 데이터를 넣고 조회할 때 POST, GET, PUT, DELETE 같은 HTTP 메서드를 사용한다.

|메서드|	설명	|예제|
|--|--|--|
|POST	|새로운 데이터 추가	|POST /users (새 유저 추가)
|GET	|데이터 조회	|GET /users/1 (ID가 1인 유저 조회)
|PUT	|데이터 수정 (전체 교체)	|PUT /users/1 (ID 1 유저 정보 변경)
|DELETE	|데이터 삭제	|DELETE /users/1 (ID 1 유저 삭제)

<br>

#### 엘라스틱 서치에서 인덱스(Index)란?
데이터를 저장하는 공간(DB에서 테이블 같은 개념)

