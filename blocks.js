(function() {
    console.log("확장 프로그램 감지됨!");

    const checkEntry = setInterval(() => {
        // 엔트리 엔진과 블록 메뉴가 준비되었는지 확인
        if (window.Entry && Entry.playground && Entry.playground.blockMenu) {
            clearInterval(checkEntry);
            
            try {
                // 1. 아무 기능 없는 테스트 블록 정의
                Entry.block.genius_test_block = {
                    color: "#ff00ff", // 눈에 확 띄는 핑크색
                    skeleton: "basic",
                    template: "천재의 블록 (작동 확인용)",
                    def: { type: "genius_test_block" },
                    class: "test",
                    func: (entity, script) => script.callReturn()
                };

                // 2. 계산(calc) 카테고리 맨 앞에 블록 추가
                // unshift를 쓰면 카테고리 최상단에 붙습니다.
                Entry.staticBlocks.push({
                    category: 'calc',
                    blocks: ['genius_test_block']
                });

                // 3. 차단 해제 및 메뉴 새로고침
                Entry.playground.blockMenu.unbanClass('genius_test_block');
                Entry.playground.blockMenu.render();
                
                console.log("블록 주입 성공!");
            } catch (e) {
                console.error("블록 주입 중 에러:", e);
            }
        }
    }, 500); // 0.5초마다 엔트리가 켜졌는지 확인
})();
