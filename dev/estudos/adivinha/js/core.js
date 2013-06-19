function PedraPapelTesoura() {

	// opção dos jogadores
	var opPlayer = 0;
	// opção PC
	var opPc = 0;

	// Pontuação
	var ptsPlayer = 0;
	// Pontuação PC
	var ptsPc = 0;

	// Rodadas
	var rodada = 1;

	// Boas Vindas
	alert("Seja Bem vindo ao Jogo");

	while (opPlayer != 3) {

		// o usuario vai escolher sua opção
		opPlayer = prompt("Escola:\n 0-pedra, 1-Papel, 2-tesoura, 3-sair do jogo");

		// o pc vai escolher
		opPc = Math.round((Math.random() * 3));

		// exibe oque o player escolheu
		if (opPlayer == 0) {
			alert("voce: Pedra");
		} else if (opPlayer == 1) {
			alert("você: Papel");
		} else if (opPlayer == 2) {
			alert("voce: Tesoura");
		} else {
			continue;
		}

		// exibe oque o pc escolheu
		if (opPc == 0) {
			alert("PC: Pedra");
		} else if (opPc == 1) {
			alert("PC: Papel");
		} else if (opPc == 2) {
			alert("PC: Tesoura");
		} else {
			continue;
		}

		// empate
		if (opPlayer == opPc) {
			alert("EMPATE");
		}

		// player escolheu pedra
		if (opPlayer == 0) {

			// pc escolheu papel
			if (opPc == 1) {
				alert("Você perdeu! Pedra é embrulhada por Papel");
				ptsPc++;
			}

			// pc escolheu tesoura
			if (opPc == 2) {
				alert("Você ganhou! Pedra esmaga Tesoura");
				ptsPlayer++;
			}
		}

		// player escolheu papel
		if (opPlayer == 1) {

			// pc escolheu pedra
			if (opPc == 0) {
				alert("Você ganhou! Pedra e embrulhada por Papel");
				ptsPlayer++;
			}

			// pc escolheu tesoura
			if (opPc == 2) {
				alert("Você perdeu! Tesoura corta Papel");
				ptsPc++;
			}
		}

		//player escolheu tesoura
		if (opPlayer == 2) {

			// pc escolheu pedra
			if (opPc == 0) {
				alert("Você perdeu! Pedra quebra Tesoura");
				ptsPc++;
			}

			// pc escolheu papel
			if (opPc == 1) {
				alert("Você ganhou! Tesoura corta Papel");
				ptsPlayer++;
			}
		}


	// fim rodada
	alert("Rodada " + rodada + ":\nVocê " + ptsPlayer + " vs " + ptsPc + " PC");
	rodada++;
	}

	// fim do jogo
	alert("Fim do Jogo. \nRodada " + rodada + ": \nVocê " + ptsPlayer + " vs " + ptsPc + " PC");
}