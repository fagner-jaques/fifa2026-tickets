-- =====================================================
-- Migration: corrige encoding broken nos teams + URLs de imagem
-- =====================================================
-- Bug 1: 24 times no DB (vindo do bacpac) tem mojibake — foram inseridos
--        com bytes UTF-8 interpretados como Latin-1, corrompendo acentos.
--        Ex: "México" virou "MÃ©xico", "Canadá" virou "CanadÃ¡".
-- Bug 2: stadium.image aponta para URLs do Wikipedia Commons que retornam
--        400 para User-Agents de browser. As imagens reais existem em
--        public/stadiums/{slug}.jpg do frontend (servidas pelo Azure Web App).
--        Migra DB para essas URLs locais.
-- =====================================================

SET NOCOUNT ON;

-- ============ Bug 1: nomes de times com encoding corrigido ============
UPDATE dbo.teams SET name = N'México'              WHERE id = 2;
UPDATE dbo.teams SET name = N'Canadá'              WHERE id = 3;
UPDATE dbo.teams SET name = N'Colômbia'            WHERE id = 4;
UPDATE dbo.teams SET name = N'Japão'               WHERE id = 8;
UPDATE dbo.teams SET name = N'França'              WHERE id = 9;
UPDATE dbo.teams SET name = N'África do Sul'       WHERE id = 17;
UPDATE dbo.teams SET name = N'Tchéquia'            WHERE id = 19;
UPDATE dbo.teams SET name = N'Bósnia e Herzegovina' WHERE id = 20;
UPDATE dbo.teams SET name = N'Suíça'               WHERE id = 22;
UPDATE dbo.teams SET name = N'Austrália'           WHERE id = 24;
UPDATE dbo.teams SET name = N'Curaçau'             WHERE id = 26;
UPDATE dbo.teams SET name = N'Escócia'             WHERE id = 30;
UPDATE dbo.teams SET name = N'Suécia'              WHERE id = 31;
UPDATE dbo.teams SET name = N'Tunísia'             WHERE id = 32;
UPDATE dbo.teams SET name = N'Bélgica'             WHERE id = 33;
UPDATE dbo.teams SET name = N'Irã'                 WHERE id = 35;
UPDATE dbo.teams SET name = N'Nova Zelândia'       WHERE id = 36;
UPDATE dbo.teams SET name = N'Áustria'             WHERE id = 40;
UPDATE dbo.teams SET name = N'Jordânia'            WHERE id = 41;
UPDATE dbo.teams SET name = N'Argélia'             WHERE id = 42;
UPDATE dbo.teams SET name = N'Arábia Saudita'      WHERE id = 44;
UPDATE dbo.teams SET name = N'Uzbequistão'         WHERE id = 45;
UPDATE dbo.teams SET name = N'Croácia'             WHERE id = 47;
UPDATE dbo.teams SET name = N'Panamá'              WHERE id = 49;

-- ============ Bug 2: imagens locais para os 16 estádios oficiais ============
UPDATE dbo.stadiums SET image = '/stadiums/metlife.jpg'   WHERE id = 1;
UPDATE dbo.stadiums SET image = '/stadiums/att.jpg'       WHERE id = 2;
UPDATE dbo.stadiums SET image = '/stadiums/sofi.jpg'      WHERE id = 3;
UPDATE dbo.stadiums SET image = '/stadiums/lumen.jpg'     WHERE id = 5;
UPDATE dbo.stadiums SET image = '/stadiums/azteca.jpg'    WHERE id = 6;
UPDATE dbo.stadiums SET image = '/stadiums/bbva.jpg'      WHERE id = 7;
UPDATE dbo.stadiums SET image = '/stadiums/bcplace.jpg'   WHERE id = 8;
UPDATE dbo.stadiums SET image = '/stadiums/bmo.jpg'       WHERE id = 9;
UPDATE dbo.stadiums SET image = '/stadiums/mercedes.jpg'  WHERE id = 10;
UPDATE dbo.stadiums SET image = '/stadiums/gillette.jpg'  WHERE id = 11;
UPDATE dbo.stadiums SET image = '/stadiums/hardrock.jpg'  WHERE id = 12;
UPDATE dbo.stadiums SET image = '/stadiums/lincoln.jpg'   WHERE id = 13;
UPDATE dbo.stadiums SET image = '/stadiums/nrg.jpg'       WHERE id = 14;
UPDATE dbo.stadiums SET image = '/stadiums/arrowhead.jpg' WHERE id = 15;
UPDATE dbo.stadiums SET image = '/stadiums/levis.jpg'     WHERE id = 16;
UPDATE dbo.stadiums SET image = '/stadiums/akron.jpg'     WHERE id = 17;
-- Rose Bowl (legacy, id=4) fica sem imagem local — preserva o que tinha

-- ============ Validação ============
SELECT TOP 5 id, name FROM dbo.teams WHERE id IN (2, 3, 9, 17, 47) ORDER BY id;
SELECT id, name, image FROM dbo.stadiums WHERE id IN (1, 6, 17) ORDER BY id;
PRINT 'Esperado: nomes corrigidos para México/Canadá/França/África do Sul/Croácia + imagens /stadiums/*.jpg';
