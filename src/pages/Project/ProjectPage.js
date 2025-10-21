import React, { useContext, useState, useEffect, useMemo } from 'react'
import { Helmet } from 'react-helmet'
import { Link, useLocation, useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { Tabs, Tab, Box } from '@material-ui/core';
import { AiOutlineHome, AiOutlineMobile, AiOutlinePrinter, AiOutlineClose } from "react-icons/ai";
import { FaPaintBrush } from "react-icons/fa";
import { BsCodeSlash, BsChevronLeft, BsChevronRight } from "react-icons/bs";

import './ProjectPage.css'
import { ThemeContext } from '../../contexts/ThemeContext';
import { categorySections, getProjectsByCategory } from '../../data/projectsData'
import { headerData } from '../../data/headerData'

function TabPanel({ children, value, index }) {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`project-tabpanel-${index}`}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function ProjectPage() {

    const { theme } = useContext(ThemeContext);
    const location = useLocation();
    const history = useHistory();
    
    // Get tab from URL query parameter
    const queryParams = new URLSearchParams(location.search);
    const tabParam = queryParams.get('tab');
    
    const getInitialTab = () => {
        if (tabParam) {
            const index = parseInt(tabParam);
            return isNaN(index) ? 0 : Math.min(Math.max(index, 0), 3);
        }
        return 0;
    };

    const [activeTab, setActiveTab] = useState(getInitialTab());

    useEffect(() => {
        const index = getInitialTab();
        setActiveTab(index);
    }, [location.search]);

    // Icon mapping for each category (matching services section)
    const categoryIcons = [
        <FaPaintBrush key="branding" />,
        <AiOutlineMobile key="social" />,
        <BsCodeSlash key="web" />,
        <AiOutlinePrinter key="print" />
    ];

    const useStyles = makeStyles((t) => ({
        home: {
            color: theme.secondary,
            position: 'absolute',
            top: 25,
            left: 25,
            padding: '7px',
            borderRadius: '50%',
            boxSizing: 'content-box',
            fontSize: '2rem',
            cursor: 'pointer',
            boxShadow: theme.type === 'dark' ? '3px 3px 6px #ffffff40, -3px -3px 6px #00000050' : '3px 3px 6px #ffffff40, -3px -3px 6px #00000050',
            transition: 'all 0.3s ease-in-out',
            "&:hover": 
            {
                color: theme.tertiary,
                transform: 'scale(1.1)',
            },
            [t.breakpoints.down('sm')]: {
                fontSize: '1.8rem',
            },
        },
        tabsContainer: {
            borderBottom: `2px solid ${theme.primary}40`,
            marginBottom: '0.5rem',
        },
        tab: {
            fontFamily: 'var(--primaryFont)',
            fontWeight: 600,
            fontSize: '2.5rem',
            textTransform: 'none',
            minWidth: 100,
            minHeight: 80,
            padding: '16px 20px',
            color: theme.tertiary,
            opacity: 0.6,
            '&.Mui-selected': {
                color: theme.primary,
                opacity: 1,
            },
            '& .MuiTab-wrapper': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
            [t.breakpoints.down('md')]: {
                fontSize: '2.2rem',
                minWidth: 90,
                minHeight: 70,
                padding: '12px 16px',
            },
            [t.breakpoints.down('sm')]: {
                fontSize: '1.8rem',
                minWidth: 75,
                minHeight: 60,
                padding: '10px 12px',
            },
            [t.breakpoints.down('xs')]: {
                fontSize: '1.5rem',
                minWidth: 65,
                minHeight: 55,
                padding: '8px 10px',
            },
        },
        selectedCategoryTitle: {
            fontSize: '2rem',
            fontWeight: 700,
            fontFamily: 'var(--primaryFont)',
            color: theme.primary,
            textAlign: 'center',
            marginBottom: '2rem',
            marginTop: '1rem',
            [t.breakpoints.down('md')]: {
                fontSize: '1.8rem',
            },
            [t.breakpoints.down('sm')]: {
                fontSize: '1.5rem',
            },
        },
        indicator: {
            backgroundColor: theme.primary,
            height: 3,
        },
        categoryDescription: {
            color: theme.tertiary,
            fontSize: '1.1rem',
            lineHeight: 1.8,
            marginBottom: '3rem',
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto 3rem',
            padding: '0 2rem',
        },
        sectionTitle: {
            color: theme.primary,
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '2rem',
            textAlign: 'center',
        },
        projectImage: {
            width: '100%',
            height: 'auto',
            borderRadius: '10px',
            objectFit: 'contain',
            cursor: 'pointer',
            transition: 'transform 0.3s ease',
            '&:hover': {
                transform: 'scale(1.05)',
            },
        },
        kidoraGrid: {
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            columnGap: '0px',
            rowGap: '4px',
        },
        kidoraImage: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '8px',
            display: 'block',
        },
        projectGrid: {
            display: 'flex',
            flexDirection: 'column',
            gap: '0',
            marginBottom: '4rem',
            alignItems: 'center',
        },
        projectItem: {
            backgroundColor: theme.primary400,
            borderRadius: '20px',
            padding: '2rem',
            boxShadow: theme.type === 'dark' 
                ? '0 10px 30px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1)' 
                : '0 10px 30px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.05)',
            width: '100%',
            maxWidth: '900px',
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: theme.type === 'dark' 
                    ? '0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.2)' 
                    : '0 20px 40px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.1)',
            },
            '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: `linear-gradient(90deg, ${theme.primary}, ${theme.secondary})`,
                borderRadius: '20px 20px 0 0',
            },
        },
        projectTitle: {
            fontFamily: 'var(--primaryFont)',
            fontSize: '1.5rem',
            fontWeight: '600',
            textAlign: 'center',
            marginTop: '1rem',
            textShadow: theme.type === 'dark' ? '0 2px 4px rgba(0,0,0,0.5)' : '0 2px 4px rgba(0,0,0,0.2)',
        },
        divider: {
            width: '100%',
            maxWidth: '900px',
            height: '3px',
            background: `linear-gradient(90deg, transparent, ${theme.primary}, transparent)`,
            margin: '2rem 0',
            borderRadius: '2px',
        },
        lightboxOverlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
        },
        lightboxContent: {
            position: 'relative',
            width: '90vw',
            maxWidth: '1100px',
            height: '85vh',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: theme.type === 'dark' 
                ? '0 20px 60px rgba(0,0,0,0.6)' 
                : '0 20px 60px rgba(0,0,0,0.3)'
        },
        lightboxScroller: {
            width: '100%',
            height: '100%',
            display: 'flex',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            scrollSnapStop: 'always',
        },
        lightboxSlide: {
            flex: '0 0 100%',
            width: '100%',
            height: '100%',
            scrollSnapAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000',
        },
        lightboxImage: {
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
        },
        lightboxArrow: {
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#fff',
            background: 'rgba(255,255,255,0.12)',
            border: 'none',
            width: 48,
            height: 48,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s',
            '&:hover': {
                background: 'rgba(255,255,255,0.2)'
            }
        },
        lightboxArrowLeft: {
            left: 12,
        },
        lightboxArrowRight: {
            right: 12,
        },
        lightboxClose: {
            position: 'absolute',
            top: 12,
            right: 12,
            color: '#fff',
            background: 'rgba(255,255,255,0.12)',
            border: 'none',
            width: 40,
            height: 40,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s',
            '&:hover': {
                background: 'rgba(255,255,255,0.2)'
            }
        },
    }));

    const classes = useStyles();
    // Import Kidora mobile screenshots once and memoize
    const kidoraAllImages = useMemo(() => {
        try {
            const ctx = require.context('../../assets/png/projects/site/mobile', false, /\.(png|jpe?g|svg)$/);
            return ctx.keys().map(ctx);
        } catch (e) {
            return [];
        }
    }, []);

    const getKidoraImages = () => {
        return kidoraAllImages.slice(0, 12);
    };

    // Lightbox state and handlers for Kidora
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const lightboxRef = React.useRef(null);

    const kidoraImages = useMemo(() => getKidoraImages(), [kidoraAllImages]);

    const openLightbox = (startIndex = 0) => {
        setLightboxIndex(startIndex);
        setIsLightboxOpen(true);
    };

    const closeLightbox = () => setIsLightboxOpen(false);

    // Smooth scroll helper for nicer transitions
    const smoothScrollTo = (element, to, duration = 500) => {
        const start = element.scrollLeft;
        const change = to - start;
        const startTime = performance.now();
        const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        const animate = (currentTime) => {
            const elapsed = Math.min((currentTime - startTime) / duration, 1);
            const eased = easeInOutCubic(elapsed);
            element.scrollLeft = start + change * eased;
            if (elapsed < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    };

    const goToIndex = (index) => {
        const total = kidoraImages.length;
        if (!lightboxRef.current || total === 0) return;
        const bounded = (index + total) % total;
        setLightboxIndex(bounded);
        const el = lightboxRef.current;
        const targetLeft = bounded * el.clientWidth;
        smoothScrollTo(el, targetLeft, 550);
    };

    const nextImage = () => goToIndex(lightboxIndex + 1);
    const prevImage = () => goToIndex(lightboxIndex - 1);

    useEffect(() => {
        if (!isLightboxOpen || !lightboxRef.current) return;
        const el = lightboxRef.current;
        const initialLeft = lightboxIndex * el.clientWidth;
        el.scrollTo({ left: initialLeft });

        const onKeyDown = (e) => {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') { e.preventDefault(); nextImage(); }
            if (e.key === 'ArrowLeft') { e.preventDefault(); prevImage(); }
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [isLightboxOpen]);

    useEffect(() => {
        if (!isLightboxOpen || !lightboxRef.current) return;
        const el = lightboxRef.current;
        const onScroll = () => {
            const idx = Math.round(el.scrollLeft / el.clientWidth);
            if (idx !== lightboxIndex) setLightboxIndex(idx);
        };
        el.addEventListener('scroll', onScroll, { passive: true });
        return () => el.removeEventListener('scroll', onScroll);
    }, [isLightboxOpen, lightboxIndex]);


    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
        history.push(`/projects?tab=${newValue}`);
    };

    return (
        <div className="projectPage" style={{backgroundColor: theme.secondary}}>
            <Helmet>
                <title>{headerData.name} | Projects - {categorySections[activeTab].title}</title>
                <meta name="description" content={`View ${categorySections[activeTab].title} projects by Marwa Hammemi. ${categorySections[activeTab].description}`} />
                <meta name="keywords" content={`${categorySections[activeTab].title}, graphic design projects, portfolio, ${headerData.name}`} />
            </Helmet>
            <div className="projectPage-header" style={{backgroundColor:theme.primary}}>
                <Link to="/">
                    <AiOutlineHome className={classes.home}/>
                </Link>
                <h1 style={{color: theme.secondary}}>Projects</h1>
            </div>
           <div className="projectPage-container">
               <Tabs
                   value={activeTab}
                   onChange={handleTabChange}
                   className={classes.tabsContainer}
                   classes={{ indicator: classes.indicator }}
                   variant="scrollable"
                   scrollButtons="auto"
                   allowScrollButtonsMobile
                   centered
               >
                   {categorySections.map((category, index) => (
                       <Tab
                           key={index}
                           icon={categoryIcons[index]}
                           className={classes.tab}
                           aria-label={category.title}
                       />
                   ))}
               </Tabs>

               <div className={classes.selectedCategoryTitle}>
                   {categorySections[activeTab].title}
               </div>

               {categorySections.map((category, index) => {
                   const categoryProjects = getProjectsByCategory(index);
                   
                   return (
                       <TabPanel key={index} value={activeTab} index={index}>
                           <div className={classes.projectGrid}>
                               {categoryProjects.length > 0 ? (
                                   categoryProjects.map((project, projIndex, array) => (
                                       <React.Fragment key={project.id}>
                                          <div className={classes.projectItem}>
                                              {project.projectName && project.projectName.toLowerCase().includes('kidora') ? (
                                                  <div className={classes.kidoraGrid}>
                                                      {getKidoraImages().map((img, idx) => {
                                                          const src = img && img.default ? img.default : img;
                                                          return (
                                                              <img key={idx} src={src} alt={`Kidora ${idx + 1}`} className={classes.kidoraImage} onClick={() => openLightbox(idx)} />
                                                          );
                                                      })}
                                                  </div>
                                              ) : (
                                                  <img 
                                                      src={project.image} 
                                                      alt={project.projectName}
                                                      className={classes.projectImage}
                                                  />
                                              )}
                                               <div className={classes.projectTitle} style={{ color: 'white' }}>
                                                   {project.projectName}
                                               </div>
                                           </div>
                                           {projIndex < array.length - 1 && (
                                               <div className={classes.divider}></div>
                                           )}
                                       </React.Fragment>
                                   ))
                               ) : (
                                   <div style={{ 
                                       textAlign: 'center', 
                                       padding: '4rem 2rem',
                                       color: theme.tertiary,
                                       fontSize: '1.2rem'
                                   }}>
                                       <p>Projects for {category.title} coming soon...</p>
                                   </div>
                               )}
                           </div>
                       </TabPanel>
                   );
               })}
            </div>    
        {isLightboxOpen && (
            <div className={classes.lightboxOverlay} role="dialog" aria-modal="true">
                <div className={classes.lightboxContent}>
                    <button className={classes.lightboxClose} onClick={closeLightbox} aria-label="Close">
                        <AiOutlineClose />
                    </button>
                    <button className={`${classes.lightboxArrow} ${classes.lightboxArrowLeft}`} onClick={prevImage} aria-label="Previous">
                        <BsChevronLeft />
                    </button>
                    <button className={`${classes.lightboxArrow} ${classes.lightboxArrowRight}`} onClick={nextImage} aria-label="Next">
                        <BsChevronRight />
                    </button>
                    <div className={classes.lightboxScroller} ref={lightboxRef}>
                        {kidoraImages.map((img, idx) => {
                            const src = img && img.default ? img.default : img;
                            return (
                                <div className={classes.lightboxSlide} key={`lb-${idx}`}>
                                    <img src={src} alt={`Kidora large ${idx + 1}`} className={classes.lightboxImage} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        )}
        </div>
    )
}

export default ProjectPage
