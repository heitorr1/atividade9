let enderecos = [];
let posicao = 0;

function adicionar() {
  let endereco = {
    cidade: document.getElementById("cidade").value,
    rua: document.getElementById("rua").value,
    bairro: document.getElementById("bairro").value,
    cep: document.getElementById("cep").value,
    numero: Number(document.getElementById("numero").value),
  };

  enderecos.push(endereco);
  posicao = enderecos.length;
  console.log(enderecos);

  limparCampos();
  exibircadastros(endereco);
}

function exibircadastros(pEndereco) {
  if (!pEndereco) return;

  document.getElementById("resCidade").value = pEndereco.cidade;
  document.getElementById("resRua").value = pEndereco.rua;
  document.getElementById("resBairro").value = pEndereco.bairro;
  document.getElementById("resCep").value = pEndereco.cep;
  document.getElementById("resNumero").value = pEndereco.numero;

  document.getElementById("Resultado").textContent = `Elemento ${posicao} de ${enderecos.length}`;
}

// Abre o modal de edição com os dados preenchidos
function abrirModalEdicao() {
  if (enderecos.length === 0 || posicao === 0) return;

  const atual = enderecos[posicao - 1];
  document.getElementById("editCidade").value = atual.cidade;
  document.getElementById("editRua").value = atual.rua;
  document.getElementById("editBairro").value = atual.bairro;
  document.getElementById("editCep").value = atual.cep;
  document.getElementById("editNumero").value = atual.numero;

  document.getElementById("editModal").classList.add("active");
}

// Salva alterações do modal de edição
document.getElementById("editForm").addEventListener("submit", function (event) {
  event.preventDefault();

  enderecos[posicao - 1] = {
    cidade: document.getElementById("editCidade").value,
    rua: document.getElementById("editRua").value,
    bairro: document.getElementById("editBairro").value,
    cep: document.getElementById("editCep").value,
    numero: Number(document.getElementById("editNumero").value),
  };

  exibircadastros(enderecos[posicao - 1]);
  document.getElementById("editModal").classList.remove("active");
});

// Cancela edição e fecha o modal
document.getElementById("cancelEditBtn").addEventListener("click", function () {
  document.getElementById("editModal").classList.remove("active");
});

function primeiro() {
  if (enderecos.length === 0) return;
  posicao = 1;
  exibircadastros(enderecos[0]);
}

function anterior() {
  if (posicao > 1) {
    posicao--;
    exibircadastros(enderecos[posicao - 1]);
  }
}

function proximo() {
  if (posicao < enderecos.length) {
    posicao++;
    exibircadastros(enderecos[posicao - 1]);
  }
}

function ultimo() {
  if (enderecos.length === 0) return;
  posicao = enderecos.length;
  exibircadastros(enderecos[posicao - 1]);
}

function excluir() {
  if (enderecos.length === 0 || posicao === 0) return;

  enderecos.splice(posicao - 1, 1);

  if (posicao > enderecos.length) posicao = enderecos.length;

  if (enderecos.length > 0) {
    exibircadastros(enderecos[posicao - 1]);
  } else {
    posicao = 0;
    limparResultados();
  }
}

function limparResultados() {
  document.getElementById("resCidade").value = "";
  document.getElementById("resRua").value = "";
  document.getElementById("resBairro").value = "";
  document.getElementById("resCep").value = "";
  document.getElementById("resNumero").value = "";
  document.getElementById("Resultado").textContent = "Nenhum cadastro exibido";
}

function limparCampos() {
  let inputs = document.querySelectorAll("#hamilton input:not([disabled])");
  inputs.forEach(input => input.value = "");
  document.getElementById("cidade").focus();
}
