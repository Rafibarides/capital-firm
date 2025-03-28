import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import palette from '../../styles/colors';
import useResponsive from '../../hooks/useResponsive'; // Import the responsive hook

const AsSeenOnSection = () => {
  const { isMobile, isTablet } = useResponsive();
  
  // Media logos data with external URLs
  const mediaLogos = [
    {
      name: "Fox News",
      url: "https://www.hatchwise.com/wp-content/uploads/2023/08/Fox-News-Channel-Emblem-1024x576.png"
    },
    {
      name: "ABC News",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/ABC_News_logo_2021.svg/1280px-ABC_News_logo_2021.svg.png"
    },
    {
      name: "Forbes",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Forbes_logo.svg/2560px-Forbes_logo.svg.png"
    },
    {
      name: "Money News",
      url: "https://www.nineforbrands.com.au/wp-content/uploads/2023/06/MoneyNews_Black.png"
    },
    {
      name: "CNN Money",
      url: "https://upload.wikimedia.org/wikipedia/commons/f/f7/CNN_Money_logo_%28old%29.png"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6 }
//     }
//   };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section style={{ 
      background: palette.skyBlue,
      width: '100%',
      padding: isMobile ? '40px 0' : '60px 0',
      position: 'relative'
    }}>
      <div style={{ 
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ 
            fontSize: isMobile ? '28px' : '36px',
            fontWeight: 'bold',
            color: palette.darkBlue,
            marginBottom: isMobile ? '30px' : '50px',
            textAlign: 'center'
          }}
        >
          As seen on
        </motion.h2>

        {/* Logos container - mobile horizontal scroll vs desktop/tablet grid */}
        {isMobile ? (
          <div style={{
            width: '100%',
            overflowX: 'auto',
            scrollbarWidth: 'none', // Hide scrollbar for Firefox
            WebkitOverflowScrolling: 'touch',
            msOverflowStyle: 'none', // Hide scrollbar for IE/Edge
          }}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              style={{ 
                display: 'flex',
                alignItems: 'center',
                paddingBottom: '10px', // Space for potential scrollbar
                width: 'max-content', // Allow container to grow with children
                gap: '30px'
              }}
            >
              {mediaLogos.map((logo, index) => (
                <motion.div
                  key={index}
                  variants={logoVariants}
                  style={{ 
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingRight: index === mediaLogos.length - 1 ? '0' : '20px'
                  }}
                >
                  <img 
                    src={logo.url} 
                    alt={`${logo.name} logo`}
                    style={{ 
                      height: '100%',
                      width: 'auto',
                      objectFit: 'contain',
                      opacity: 0.8,
                      filter: 'grayscale(100%)',
                      maxWidth: '140px'
                    }} 
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            style={{ 
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              flexWrap: isTablet ? 'wrap' : 'nowrap',
              gap: isTablet ? '30px' : '20px'
            }}
          >
            {mediaLogos.map((logo, index) => (
              <motion.div
                key={index}
                variants={logoVariants}
                whileHover={{ scale: 1.1 }}
                style={{ 
                  flex: '1',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '0 15px',
                  minWidth: isTablet ? '150px' : '180px',
                  maxWidth: '220px'
                }}
              >
                <img 
                  src={logo.url} 
                  alt={`${logo.name} logo`}
                  style={{ 
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                    opacity: 0.8, 
                    filter: 'grayscale(100%)', 
                    maxHeight: '60px'
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default AsSeenOnSection;
