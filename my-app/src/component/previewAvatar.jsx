import React, { useEffect, useState } from 'react'
function PreviewAvatar() {
  const [avatar, setAvatar] = useState()

  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview)
    }
  }, [avatar])

  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0]
    file.preview = URL.createObjectURL(file)
    setAvatar(file)
  }
  return (
    <>
      <h1>bài 7 PreviewAvatar</h1>
      <input type="file" onChange={handlePreviewAvatar} />
      {
        avatar && (
          <img src={avatar.preview} width="80%" alt="" />
        )
      }
    </>
  )
}

export default PreviewAvatar