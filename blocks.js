(function() {
    function inject() {
        const script = document.createElement('script');
        script.textContent = `
            (function() {
                const checkEntry = setInterval(() => {
                    // 엔트리 엔진과 블록 메뉴가 완벽히 로드될 때까지 대기
                    if (window.Entry && Entry.playground && Entry.playground.blockMenu) {
                        clearInterval(checkEntry);
                        
                        try {
                            // 1. 블록 정의
                            Entry.block.genius_test_block = {
                                color: "#ff00ff",
                                skeleton: "basic",
                                template: "천재의 블록 (작동 확인용)",
                                def: { type: "genius_test_block" },
                                class: "test",
                                func: (entity, script) => script.callReturn()
                            };

                            // 2. staticBlocks가 없으면 강제로 빈 배열 생성 (에러 방지 핵심)
                            if (typeof Entry.staticBlocks === 'undefined') {
                                Entry.staticBlocks = [];
                            }

                            // 3. 카테고리에 안전하게 push
                            Entry.staticBlocks.push({
                                category: 'calc',
                                blocks: ['genius_test_block']
                            });

                            // 4. 차단 해제 및 렌더링
                            Entry.playground.blockMenu.unbanClass('genius_test_block');
                            Entry.playground.blockMenu.render();
                            
                            console.log("핑크색 블록 주입 성공!");
                        } catch (e) {
                            console.error("주입 중 에러:", e.message);
                        }
                    }
                }, 500);
            })();
        `;
        (document.head || document.documentElement).appendChild(script);
        script.remove(); // 실행 후 흔적 제거
    }

    inject();
})();
