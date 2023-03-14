# Web

### **Networking**

- ‘두 대 이상의 컴퓨터를 케이블로 연결하여 네트워크를 구성하는 것’

### **Client And Server**

- Client(서비스를 사용하는 컴퓨터}
    - 브라우저에서 요청을 보내는 주체
- Server(서비스를 제공하는 컴퓨터)
    - 클라이언트의 요청을 수신한 후에 응답을 전달하는 주체

### **HTTP / URL**

HTTP(protocol)

- 웹 브라우저에서 url을 이용해 클라이언트와 서버가 통신하는 규칙
- 클라이언트에서 서버로 보낸 HTTP메시지를 **Request**
- 서버에서 클라이언트로 보낸 HTTP메시지를 **Response**

URL(Uniform Resource Locator)

- Internet에서 Web page, image, video 등의 리소스 위치를 가리키는 문자열
- Protocol, Host, Path, Query String로 구성됨

[HTTP,  URL](https://velog.io/@cnffjd95/Web-HTTP-URL)

### **쿠키 / 세션**

**쿠키와 세션, 토큰이 등장한 이유는?**

- HTTP 통신은 request and response가 종료되면 stateless 즉, 상태 유지를 하지 않는다는 특징이 있다 그렇기에 쿠키 세션 토큰을 사용하게 되었다
    - Connectionless Protocol
        - Client가 Server에 Request 했을 때, 요청에 맞는 응답을 보낸 후 연결을 끊는 방식
    - Stateless Protocol
        - Client의 상태 정보를 가지지 않는 방식, Client와 데이터를 주고받았다 해도 그 다음 통신에서 유지되지 않음
        
- **🍪**쿠키(Cookie)
    - 쿠키는 공개 가능한 정보를 사용자의 브라우저에 저장
    - Server는 Client의 로그인 요청에 대한 응답을 작성할 때, 클라이언트 측에 저장하고 싶은 정보를 응답 헤더의 `set-cookie` 에 담는다.
    - Cilent가 재요청 하면 저장된 쿠키를 요청 헤더의 `cookie`에 담아 보낸다.
    - Server는 `cookie`에 담긴 정보를 바탕으로 Client를 식별 할 수 있음
    
- **🔒**세션(Session)
    - 비밀번호화 같은 인증 정보를 `cookie`에 저장하지 않고 사용자의 식별자인 `session id`를 저장
    - Server에는 인증 정보와 더불에  `session id`에 해당하는 사용자의 정보를 저장
    - Server에 데이터를 저장하기 때문에 유저의 수가 늘어가게되면 Server에 부하를 가하게 됩니다.
    
- **💰** 토큰(JWT)
    - **토큰이란?**
        
        <aside>
        💡 **Authentication:** 인증. 내가 누구인지 증명 ! 해주는 것.
        **Authorization**: 인가. 증명된 데이터를 통과
        
        </aside>
        
        - 단순 웹 토큰(SWT) 및 SAML 토큰과 비교할 때 JWT를 사용하면 이점이 있음
        - JSON으로 Ecoding 하기 때문에, XML로 Encoding 하는 SAML 토큰보다 작음
        - JWT는 **공개키와 개인키**를 나누어 서명이 가능, **HMAC 암호 알고리즘**을 사용하여 암호화된 서명도 가능
            
            [[Security] 공개키(Public key) vs 개인키(private key), 대칭키 vs 비대칭키](https://spidyweb.tistory.com/310)
            
            [HMAC 알고리즘 정리](https://velog.io/@jamwonsoo/HMAC-알고리즘-정리)
            
        - JSON의 object는 일반적인 프로그래밍 언어이기 때문에 접근성이 좋음
        - JWT는 인터넷 규모로 사용되며 모바일에서 처리하는 것이 더 쉽다는 것을 의미함
    - **토큰의 구조**
        
        ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dcf38e7e-558a-40ba-90a4-1663f7b5ed08/Untitled.png)
        
        - 헤더(Header)
            - JWT를 검증하는데 필요한 정를 가진 J**SON 객체는 Base64 URL-Safe Encoding된 문자열**
                
                [base64 vs base64 url safe 그리고 예제!](https://velog.io/@dohaeng0/base64-vs-base64-url-safe-그리고-예제)
                
            - JWT를 어떻게 Verify하는가에 대한 정보를 담고 있으며 **alg**는 서명시 사용하는 알고리즘, **kid**는 서명시 사용하는 키를 식별하는 값
        - 페이로드(Payload)
            - JWT의 본문이며 페이로드의 속성을 **Claim Set**이라고 부름
            - **Claim Set**은 JWT에 대한 내용이나 Client, Server 간 주고받는 데이터들로 구성
        - 서명(Signature)
            - (.)을 구분자로 하여 헤더와 페이로드를 합친 문자영을 서명한 값
            - 헤더의 **alg**에 정의된 알고리즘과 비밀 키를 이용해 생성하고 **Base64 URL-Safe Encoding**을 함
    - **토큰의 단점**
        - 쿠키 / 세션과 다르게 데이터 자체의 길이가 길어, 인증 요청이 많아질수록 네트워크 부하가 심해짐
        - 페이로드 자체는 암호화 되지 않기 때문에 중요한 정보를 담기에 부적절함
        - 토큰을 중간에서 탈취당하면 대처가 어려움
        
        [[WEB] 📚 JWT 토큰 인증 이란? - 💯 이해하기 쉽게 정리](https://inpa.tistory.com/entry/WEB-📚-JWTjson-web-token-란-💯-정리)
        

### **IP / Port / DNS**

- IP
    - Internet Protocol의 약자로 인터넷이 통하는 네트워크에서 어떤 정보를 수신하고 송신하는 통신에 대한 규약을 의미한다.
    - 인터넷에서 단말기끼리 통신할 때 각각의 지정된 주소로 데이터를 전달하기 위해 사용
    - IP 주소는 118.37.191.84 같은 형식으로 표현된다.
- Port
    - 하나의 IP에서 여러 개의 서비스를 이용할 때 그 서비스를 구분하기 위해서 사용
    - 하나의 콘센트로 여러 장치를 사용하게 해주는 멀티탭을 생각하면 쉽게 이해될 것이다
- DNS(Domain Name System)
    - 사람이 읽을 수 잇는 도메인 이름을 IP 주소로 변환하는 시스템, 여기서 말하는 도메인 주소는 [**www.google.com](http://www.google.com)** 같은 주소를 의미한다
    - 도메인 주소는 인간의 편의를 위해 사용하며 실제 네트워크 상에서는 IP 주소로 변경 후 Ip 주소로 접속하는 과정이 필요하다
    
    [DNS란? (도메인 네임 시스템 개념부터 작동 방식까지) - 하나몬](https://hanamon.kr/dns란-도메인-네임-시스템-개념부터-작동-방식까지/)
    

### **HTML / CSS / JavaScript**

- HTML
    - 우선 HTML은 **프로그래밍 언어는 아니며**, Web Page가 어떻게 구조화되어 있는지 브라우저로 하여금 알 수 있도록 하는 **MarkUP Language** 입니다.
    - Element로 구성되어 있으며 이를 적절한 방법으로 나타내고 실행하기 위해 각 컨텐츠의 여러 부분을 감싸고 MarkUp 합니다.
    
    [마크업이란?](https://velog.io/@skwx50000/마크업이란)
    
    [마크업 언어란?](https://velog.io/@devp1023/마크업-언어란)
    

- CSS
    - 사용자에게 문서를 표시하는 방법을 지정하는 언어, 쉽게 말해 어떻게 보여질지 만드는 언어라고 생각하면 좋습니다.
    - HTML 요소들이 어떻게 보이는 가를 정의하는데 사용되는 stylesheet language입니다.
    
    [코딩교육 티씨피스쿨](http://www.tcpschool.com/html/html_expand_css)
    

- JavaScript
    - 개발자가 대화식 웹 페이지를 만들기 위해 사용하는 프로그래밍 언어로 페이지를 생동감있게 만들어주는 script 언어입니다.
    - 앞서 말했듯 정적인 페이지를 동적으로 만들어주는 것으로 Java와는 별개의 언어입니다.