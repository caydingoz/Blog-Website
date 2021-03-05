import React from 'react'
import AvatarPic from './Css/avatarDeneme.png'
import './Css/aboutPage.css'
import { SiLinkedin, SiGithub, SiGmail } from 'react-icons/si'

function AboutPage() {
    let isMobile = window.innerWidth < 900;
    return (
        <div class={isMobile ? 'container' : 'container pt-5'}>
            <div class='row'>
                <div class={isMobile ? 'col-3' : 'col-3 pt-3'} style={{ textAlign: 'center' }} >
                    <div class='container px-0'>
                        <img style={{ borderRadius: '50%'}} src={AvatarPic} width={isMobile ? '100%' : '170px'} />
                        <p style={{ fontSize: isMobile ? '10px' : '16px' }}>Sample Photo</p>
                    </div>
                    <div class={isMobile ? 'socialMediaContainer container mt-5 px-0' : 'socialMediaContainer container mt-5'}>
                        <a href='https://www.linkedin.com/in/caydingoz/'><SiLinkedin color={'#0e76a8'} size={' 30px' }/></a>
                        <a href='https://github.com/caydingoz'><SiGithub color={'white'} size={' 30px' }/></a>
                        <a href='mailto:caydingoz1@gmail.com'><SiGmail color={'#BB001B'} size={' 30px' }/></a>
                    </div>
                </div>
                <div class='col-9'>
                    <div class='aboutPageContainer container'>
                        <div class='aboutContainer row p-4'><p style={{ fontFamily: 'Times New Roman', fontSize:isMobile ? '14px' : '16px' }}>
                        &nbsp;&nbsp; Yazılıma olan ilgim 2018 yazında arkadaşım ile Unity'de oyun geliştirme fikri ile başladı. 
                        İlgimin artmasıyla İstanbul Üniversitesinde okuduğum bölüm olan inşaat mühendisliğini bıraktım ve
                        yatay geçiş ile aynı üniversitede bilgisayar mühendisliği bölümüne geçiş yaptım. <br/>
                        &nbsp;&nbsp; Güncel olarak web development konusunda kendimi geliştirmekteyim. React ve Node öğreniyorum, 
                        öğrenirken yaptığım basit projeleri ise projeler kısmına ve Github'a yüklüyorum. 
                        Uzun dönem yaz stajı arayışı içerisindeyim CV mi gönderebilirim.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutPage;