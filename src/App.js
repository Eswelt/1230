import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState(1); // 用于管理当前页面
  const [showSecondContent, setShowSecondContent] = useState(false); // 控制第二组文字的显示

  const handlePageClick = () => {
    setShowSecondContent(true); // 点击页面后显示第二组文字
  };

  const goToNextPage = () => {
    setCurrentPage(2); // 跳转到第二页
  };

  return (
    <div className="page-a" onClick={handlePageClick}>
      {/* 第一页 */}
      {currentPage === 1 && (
        <>
          {/* 第一组文字 */}
          <div className="first-group">
            {['亲爱的豪', '生日快乐'].map((text, index) => (
              <motion.h1
                key={index}
                className="fade-in"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 1, duration: 0.8 }}
              >
                {text}
              </motion.h1>
            ))}
          </div>

          {/* 第二组文字 */}
          {showSecondContent && (
            <div className="second-group">
              {['我不是QQ音乐', '也不是bilibili', '但我也陪你走过了这一岁哦'].map((text, index) => (
                <motion.p
                  key={index}
                  className="fade-in"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 1.5, duration: 0.8 }}
                >
                  {text}
                </motion.p>
              ))}
              <motion.button
                className="next-button fade-in"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 6, duration: 0.8 }}
                onClick={goToNextPage}
              >
                【翻看年度回忆】
              </motion.button>
            </div>
          )}
        </>
      )}

      {/* 第二页 */}
      {currentPage === 2 && (
       <div className="page-b">
       {/* 左对齐文本框 */}
       <div className="left-box">
         <h2 className="textAni">25岁的第一个好消息来自川大</h2>
         <p className="textAni" style={{ animationDelay: '0.3s' }}>重返校园体验卡+1</p>
         <div className="student-card-placeholder textAni" style={{ animationDelay: '0.6s' }}>
           [学生卡图片]
         </div>
       </div>
     
       {/* 右对齐文本框 */}
       <div className="right-box">
         <p className="textAni" style={{ animationDelay: '1.8s' }}>新生演讲、广泛社交、向上管理</p>
         <p className="textAni" style={{ animationDelay: '2.1s' }}>最难的果然不是学习知识</p>
         <p className="textAni" style={{ animationDelay: '2.4s' }}>而是学会成为E人</p>
       </div>
     </div>
     
      )}
    </div>
  );
}

export default App;
