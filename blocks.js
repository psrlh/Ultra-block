// 1. 블록의 모양과 기능을 정의합니다.
Entry.block.say_hello_a = {
    color: "#339AF0", // 블록 색상 (파란색 계열)
        skeleton: "basic", // 일반 블록 모양
            statements: [],
                params: [],
                    events: {},
                        def: {
                                type: "say_hello_a"
                                    },
                                        paramsKeyMap: {},
                                            class: "custom_blocks", // 카테고리 이름
                                                func: function (sprite, script) {
                                                        alert("a"); // 실제 다이얼로그를 띄우는 자바스크립트 코드
                                                                return script.callReturn();
                                                                    },
                                                                    };

                                                                    // 2. 블록을 엔트리 메뉴에 추가합니다.
                                                                    // 보통 '판단'이나 '계산' 카테고리 뒤에 붙입니다.
                                                                    if (!Entry.staticBlocks) {
                                                                        Entry.staticBlocks = [];
                                                                        }
                                                                        Entry.staticBlocks.push({
                                                                            category: "etc", // 기타 카테고리에 추가
                                                                                blocks: ["say_hello_a"]
                                                                                });

                                                                                // 3. 변경된 블록 설정을 엔트리에 반영합니다.
                                                                                Entry.playground.blockMenu.unbanBlocks(["say_hello_a"]);
                                                                            
