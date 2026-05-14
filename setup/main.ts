import '../styles/theme.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import type { AppContext } from '@slidev/types'

// #region agent log
function logUserGroupsBulletDebug(runId: string) {
  const ul = document.querySelector('.user-groups-list ul') as HTMLElement | null
  if (!ul) {
    fetch('http://127.0.0.1:7439/ingest/ad64cd7f-4c05-4b0f-90d5-f6c20805b583', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Debug-Session-Id': '309f4e' },
      body: JSON.stringify({
        sessionId: '309f4e',
        runId,
        hypothesisId: 'H4',
        location: 'setup/main.ts:logUserGroupsBulletDebug',
        message: 'user-groups ul not in DOM',
        data: { found: false },
        timestamp: Date.now(),
      }),
    }).catch(() => {})
    return
  }
  const li = ul.querySelector('li') as HTMLElement | null
  if (!li) return

  const ulCs = getComputedStyle(ul)
  const liCs = getComputedStyle(li)
  let markerContent = ''
  let markerWidth = ''
  try {
    const m = getComputedStyle(li, '::marker')
    markerContent = m.getPropertyValue('content')
    markerWidth = m.getPropertyValue('width')
  } catch {
    markerContent = '(unsupported)'
  }
  const beforeCs = getComputedStyle(li, '::before')
  const childTags = [...ul.children].map((c) => c.tagName)

  fetch('http://127.0.0.1:7439/ingest/ad64cd7f-4c05-4b0f-90d5-f6c20805b583', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Debug-Session-Id': '309f4e' },
    body: JSON.stringify({
      sessionId: '309f4e',
      runId,
      hypothesisId: 'H1-H5',
      location: 'setup/main.ts:logUserGroupsBulletDebug',
        message: 'computed styles for user-groups list',
        data: {
          fixVersion: 1,
        ulListStyleType: ulCs.listStyleType,
        ulListStyleImage: ulCs.listStyleImage,
        ulPaddingInlineStart: ulCs.paddingInlineStart,
        liListStyleType: liCs.listStyleType,
        liDisplay: liCs.display,
        markerContent,
        markerWidth,
        beforeContent: beforeCs.getPropertyValue('content'),
        beforeWidth: beforeCs.getPropertyValue('width'),
        beforeHeight: beforeCs.getPropertyValue('height'),
        childCount: ul.children.length,
        childTags,
      },
      timestamp: Date.now(),
    }),
  }).catch(() => {})
}
// #endregion

export default async function setup({ router }: AppContext) {
  const schedule = (runId: string) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => logUserGroupsBulletDebug(runId))
    })
  }

  router.afterEach(() => {
    schedule('nav')
  })
  schedule('initial')
}
