import { notion, databaseId } from "../../../../config/notion.config.js";

// 사용자 이름으로 데이터를 검색하는 함수
async function getExistingUserData(uid) {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: 'UserUid',
        title: {
          equals: uid
        }
      }
    });

    return response.results.length > 0 ? response.results[0] : null;
  } catch (error) {
    console.error('Error querying database:', error);
    return null;
  }
}

// 데이터 생성 및 하위 블록 추가 함수
export async function SaveDataService(uid,data,question,uploadedImageUrl) {
  try {
    // 기존 데이터 검색
    let existingData = await getExistingUserData(uid);
    let newPageId;

    if (existingData) {
      // 기존 데이터가 있는 경우
      newPageId = existingData.id;
    } else {
      // 기존 데이터가 없는 경우 새로운 항목 생성
      const newEntryResponse = await notion.pages.create({
        parent: { database_id: databaseId },
        properties: {
          'UserUid': {
            title: [
              {
                type: 'text',
                text: {
                  content: uid,
                },
              },
            ],
          },
        }
      });

      // 새로 생성된 항목의 ID 가져오기
      newPageId = newEntryResponse.id;
    }

    // 하위 블록 정의
    const childBlocks = [
      {
        object: 'block',
        type: 'heading_2',
        heading_2: {
          rich_text: [
            {
              type: 'text',
              text: {
                content: question // 하위 블록의 제목
              }
            }
          ]
        }
      },
      {
        object: 'block',
        type: 'paragraph',
        paragraph: {
          rich_text: [
            {
              type: 'text',
              text: {
                content: data // 하위 블록의 내용
              }
            }
          ]
        }
      },
      {
        object: 'block',
        type: 'paragraph',
        paragraph: {
          rich_text: [
            {
              type: 'text',
              text: {
                content: uploadedImageUrl,
              }
            }
          ]
        }
      }
    ];

    // 하위 블록을 데이터베이스 항목에 추가
    await notion.blocks.children.append({
      block_id: newPageId, // 기존 또는 새로 생성된 데이터베이스 항목의 ID 사용
      children: childBlocks
    });

    // true 반환하여 데이터 생성 및 하위 블록 추가 성공 표시
    return true;
  } catch (err) {
    console.error('Error creating data service:', err);
    // false 반환하여 데이터 생성 및 하위 블록 추가 실패 표시
    return false;
  }
}

export async function GetDataService(uid) {
    try {
      const response = await notion.databases.query({
        database_id: databaseId,
        filter: {
          property: 'UserUid',
          title: {
            equals: uid
          }
        }
      });
      return response.results[0];
    } catch (error) {
      console.error('Error querying database:', error);
      return false;
    }
  } 