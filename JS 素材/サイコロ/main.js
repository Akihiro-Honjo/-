/*
 * main.js �T�C�R����U��v���O����
 */
var count;	// �ω����Ă���悤�Ɍ������
var $id = function(id){ return document.getElementById(id); };

/*
 * �T�C�R����U��
 */
function shake(){
	var sai = Math.floor(Math.random() * 6) + 1;		// 1����6�܂ł̓K���Ȑ���
	sai = sai + ".png";							// �摜�t�@�C��������
	$id("saikoro").innerHTML = "<img src='" + sai + "' width='64' height='64'>";
}

/*
 * �T�C�R����U��Ƃ��̃A�j���[�V����
 */
function anime(){
	if(count > 20){	// �K����20��قǐU��
		count = 0;
		$id("btn").disabled = "";	// �{�^�����g�����Ԃɂ���
		return 0;
	}
	shake();
	count++;
	setTimeout(anime, 50);	// 50�~���b�Ԋu�ŕ\���؂�ւ�
}

function saikoro(){
	count = 0;
	$id("btn").disabled = "true";	// �{�^�����g�p�s�ɂ���
	anime();						// �T�C�R���A�j���J�n
}

/*
 * �N�����̏���
 */
window.onload = function(){
	shake();		// ��񂾂��T�C�R����U��
}
