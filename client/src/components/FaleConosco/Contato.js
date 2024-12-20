import React, { useState } from 'react';
import './Contato.css';

export default function FaleConosco() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleChat = () => setIsOpen(!isOpen)

    return (
        <div className="fale-conosco">
            {/* Botão flutuante */}
            <button className="chat-button" onClick={toggleChat}>
                💬
            </button>

            {/* Janela de chat */}
            {isOpen && (
                <div className="chat-window">
                    <div className="chat-header">
                        <h3>Fale Conosco</h3>
                        <button className="close-button" onClick={toggleChat}>
                            ✖
                        </button>
                    </div>
                    <div className="chat-body">
                        <p>Olá! Como podemos ajudar?</p>
                        <textarea placeholder="Digite sua mensagem..."></textarea>
                        <button className="send-button">Enviar</button>
                    </div>
                </div>
            )}
        </div>
    );
}
