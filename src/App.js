import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './styles/global.css';
import './styles/page-a.css';
import './styles/page-b.css';
import './styles/page-c.css';


// 添加箭头图标组件
function UpArrow({ delay }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay); // 延迟显示箭头
    return () => clearTimeout(timer); // 清除定时器
  }, [delay]);

  return (
    visible && (
      <div className="arrow"></div> // 显示箭头
    )
  );
}

function App() {
  useEffect(() => {
    // 动态设置 body 的高度以适应移动设备
    const updateHeight = () => {
      document.body.style.height = `${window.innerHeight}px`;
    };
    updateHeight(); // 初次加载时设置高度
    window.addEventListener('resize', updateHeight); // 监听窗口大小变化
    // 清除监听器
    return () => window.removeEventListener('resize', updateHeight);
  }, []);
  
  const [currentPage, setCurrentPage] = useState(1); // 用于管理当前页面

  //第一页特殊跳转：点击也可以跳转
  const goToNextPage = () => {
    setCurrentPage(2); // 跳转到第二页
  };

  //此后每一页的滑动翻页设置
  const totalPages = 3; // 假设总共有3页
  let touchStartY = 0; // 记录触摸开始的 Y 坐标
  // 触摸开始事件
  const handleTouchStart = (e) => {
    touchStartY = e.touches[0].clientY; // 获取触摸开始的 Y 坐标
  };
  // 触摸结束事件
  const handleTouchEnd = (e) => {
    const touchEndY = e.changedTouches[0].clientY; // 获取触摸结束的 Y 坐标
    const deltaY = touchEndY - touchStartY; // 计算滑动的垂直距离
    if (deltaY > 50 && currentPage > 1) {
      // 向下滑动（翻到上一页）
      setCurrentPage((prev) => prev - 1);
    } else if (deltaY < -50 && currentPage < totalPages) {
      // 向上滑动（翻到下一页）
      setCurrentPage((prev) => prev + 1);
    }
};

  return (
    <div 
      className={`page-${currentPage}`} // 动态设置页面样式
      onTouchStart={handleTouchStart}   // 注册触摸开始事件
      onTouchEnd={handleTouchEnd}       // 注册触摸结束事件
    >

      {/* 第一页 */}
      {currentPage === 1 && (
        <div className="page-a">
          {/* 第一组文字 */}
          <div className="first-group">
            {['亲爱的豪', '生日快乐'].map((text, index) => (
              <motion.h1
                key={index}
                className={index === 1 ? 'fade-in large-text' : 'fade-in'} // 第二行应用 large-text 类
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 1, duration: 0.8 }}
              >
                {text}
              </motion.h1>
            ))}
          </div>

          {/* 第二组文字 */}
            <div className="second-group">
              {['我不是QQ音乐', '不是Bilibili', '不是百度网盘', '但我也见证了你的这一岁哦'].map((text, index) => (
                <motion.p
                  key={index}
                  className="fade-in"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 3 + index * 1, duration: 0.8 }}
                >
                  {text}
                </motion.p>
              ))}
            </div>
          

          {/* 按钮 */}
               <motion.button
               className="button-container "
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 8, duration: 1 }} // 按钮在 6 秒后显示
               onClick={goToNextPage}
              >
                【翻看年度回忆】
                </motion.button>
        </div>
      )}

      {/* 第二页 */}
      {currentPage === 2 && (
       <div className="page-b">
       {/* 左对齐文本框 */}
       <div className="left-box">
         <h2 className="textAni">第一个好消息来自川大</h2>
         <p className="textAni" style={{ animationDelay: '0.3s' }}>重返校园体验卡+1</p>
         <p className="textAni" style={{ animationDelay: '0.6s' }}>周末闲暇归零</p>
       </div>
     
       {/* 右对齐文本框 */}
       <div className="right-box">
         <p className="textAni" style={{ animationDelay: '1.8s' }}>新生演讲、广泛社交、向上管理</p>
         <p className="textAni" style={{ animationDelay: '2.1s' }}>果然最难的不是学习知识</p>
         <p className="textAni" style={{ animationDelay: '2.4s' }}>而是学会成为
          <span className="highlight">E人</span> {/* 给 E人 添加 span 包裹 */}
         </p>
       </div>

       {/* 向上箭头提示 */}
          <UpArrow delay={2700} />
     </div>
     )}

      {/* 第三页 */}
      {currentPage === 3 && (
        <div className="page-c">
          {/* 第一组右对齐文本框 */}
          <div className="right-box">
            <h2 className="textAni">当然学习知识也不能停</h2>
            <p className="textAni" style={{ animationDelay: '0.3s' }}>
             你今年最常用的微信状态正是
            </p>
            <p className="textAni" style={{ animationDelay: '0.6s' }}>
              <span className="highlight"> “沉迷学习”</span> 
            </p>
          </div>
      
          {/* 第二组右对齐文本框 */}
          <div className="right-box">
            <p className="textAni" style={{ animationDelay: '1.8s' }}>
              在以往的基础上
            </p>
            <p className="textAni" style={{ animationDelay: '2.1s' }}>
              你阅读了更多
              <span className="highlight">经济学</span>书籍
            </p>
            <p className="textAni" style={{ animationDelay: '3.0s' }}>
              <span className="highlight">基层经济政策与实践</span> 
             <p className="textAni" style={{ animationDelay: '3.3s' }}>
             是你最关注的话题
            </p>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
